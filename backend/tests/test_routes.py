# tests/test_routes.py

import json

# tests/test_routes.py
from app.models import Task, db

def test_get_tasks_empty(client, db):
    # Clear all tasks to ensure empty DB
    Task.query.delete()
    db.session.commit()

    res = client.get('/api/tasks')
    assert res.status_code == 200
    assert res.json == []


def test_create_task(client, db):
    res = client.post('/api/tasks', json={"title": "New Task", "description": "Desc"})
    assert res.status_code == 201
    data = res.json
    assert data['title'] == "New Task"
    assert data['completed'] is False

    # Check task exists in DB
    from app.models import Task
    task = db.session.get(Task, data['id'])
    assert task is not None

def test_mark_done(client, db):
    # Create task
    res = client.post('/api/tasks', json={"title": "Done Task"})
    task_id = res.json['id']

    # Mark done
    res2 = client.post(f'/api/tasks/{task_id}/done')
    assert res2.status_code == 200
    data = res2.json
    assert data['completed'] is True  # Now works because route returns task
