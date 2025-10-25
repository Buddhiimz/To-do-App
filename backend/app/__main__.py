# app/__main__.py

from . import create_app, db

app = create_app()

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Initialize database tables
    app.run(host="0.0.0.0", port=5000)  # Start the app
