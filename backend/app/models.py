# app/models.py

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()  # Initialize SQLAlchemy instance

class Task(db.Model):
    __tablename__ = "task"  # Table name in the database
    id = db.Column(db.Integer, primary_key=True)  # Primary key
    title = db.Column(db.String(255), nullable=False)  # Task title
    description = db.Column(db.Text, nullable=True)  # Optional description
    completed = db.Column(db.Boolean, default=False, nullable=False)  # Completion status
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)  # Creation timestamp

    def to_dict(self):
        """Serialize Task object to a dictionary for JSON responses"""
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "completed": self.completed,
            "created_at": self.created_at.isoformat()
        }
# Note: The db instance should be initialized with the Flask app in the application factory.