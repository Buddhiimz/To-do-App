# app/__init__.py

from flask import Flask
from flask_cors import CORS  
from .models import db
from .routes import main_bp
import os

def create_app():
    app = Flask(__name__)
    
    CORS(app)  # Enable Cross-Origin Resource Sharing
    
    # Load database credentials from environment variables or use defaults
    host = os.getenv("DATABASE_HOST", "localhost")
    user = os.getenv("DATABASE_USER", "todo_user")
    pwd = os.getenv("DATABASE_PASSWORD", "todo_pass")
    name = os.getenv("DATABASE_NAME", "todo_db")
    
    # Construct the SQLAlchemy database URI
    uri = f"mysql+pymysql://{user}:{pwd}@{host}/{name}"
    app.config['SQLALCHEMY_DATABASE_URI'] = uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db.init_app(app)  # Initialize database with the Flask app
    app.register_blueprint(main_bp)  # Register routes
    
    return app

# For direct execution (mostly for testing)
if __name__ == "__main__":
    app = create_app()
    with app.app_context():
        db.create_all()  # Initialize tables
    app.run(host="0.0.0.0", port=5000)
