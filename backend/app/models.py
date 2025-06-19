from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from .database import Base

class Student(Base):
    __tablename__ = "students"


    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    phone  = Column(String, nullable=False)
    neet_score = Column(Integer)
    message = Column(String)
    created_at = Column(DateTime, default = datetime.utcnow)


class Admin(Base):
    __tablename__ = "admins"

    id =Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    hashed_password = Column(String, nullable=False)

    

