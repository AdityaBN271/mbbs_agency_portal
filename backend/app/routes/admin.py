from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import schemas, models, auth, crud
from app.database import get_db
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter(prefix="/admin")

@router.post("/signup", response_model=schemas.AdminOut)
def signup(admin: schemas.AdminCreate, db: Session = Depends(get_db)):
    existing = db.query(models.Admin).filter(models.Admin.username == admin.username).first()
    if existing:
        raise HTTPException(status_code=400, detail="Admin username already exists")

    new_admin = models.Admin(
        username=admin.username,
        hashed_password=auth.get_password_hash(admin.password)
    )
    db.add(new_admin)
    db.commit()
    db.refresh(new_admin)
    return new_admin

@router.post("/login", response_model=schemas.Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    admin = db.query(models.Admin).filter(models.Admin.username == form_data.username).first()
    if not admin or not auth.verify_password(form_data.password, admin.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid username or password")
    
    access_token = auth.create_access_token(data={"sub": admin.username})
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/applications", dependencies=[Depends(auth.get_current_admin)])
def get_all_applications(db: Session = Depends(get_db)):
    return db.query(models.Student).order_by(models.Student.created_at.desc()).all()
