from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import schemas, crud
from app.database import get_db

router = APIRouter()

@router.post("/apply", response_model=schemas.StudentOut)
def apply(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    return crud.create_application(db, student)