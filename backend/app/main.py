from fastapi import FastAPI
from app import models
from app.database import engine
from app.routes import student
from app.routes import admin
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
origins = [
    "https://mbbs-frontend.onrender.com",
      "http://localhost:5173"  # React frontend dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # 👈 allows requests from frontend
    allow_credentials=True,
    allow_methods=["*"],            # 👈 allows POST, GET, etc.
    allow_headers=["*"],            # 👈 allows custom headers like Content-Type
)



app.include_router(student.router)
app.include_router(admin.router)

