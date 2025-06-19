from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class StudentCreate(BaseModel):
    name: str
    email: str
    phone: str
    neet_score: Optional[int] = None
    message: Optional[str] = None


class StudentOut(StudentCreate):
    id: int
    created_at: datetime

    class Config:
         from_attributes = True


class AdminLogin(BaseModel):
    username: str
    password: str

class AdminOut(BaseModel):
    id: int
    username: str

    class config:
         from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str

class AdminCreate(BaseModel):
    username: str
    password: str


