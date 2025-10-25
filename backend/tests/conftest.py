import pytest
from app import create_app, db as _db
from flask import Flask

# Fixture to create a Flask app for testing
@pytest.fixture(scope='session')
def app():
    app = create_app()
    app.config['TESTING'] = True  
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'  
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    with app.app_context():
        _db.create_all()  
        yield app 
        _db.drop_all() 

# Fixture to provide a test client for sending requests to the app
@pytest.fixture
def client(app):
    return app.test_client()  # Allows API testing without running a server

# Fixture to provide the database object to tests
@pytest.fixture
def db(app):
    return _db  # Allows direct DB access for test setup/validation
