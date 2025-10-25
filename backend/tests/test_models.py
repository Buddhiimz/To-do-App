# tests/test_models.py

from app.models import Task

def test_task_model(db):
    # Create a task
    task = Task(title="Test Task", description="Test description")
    db.session.add(task)
    db.session.commit()

    assert task.id is not None
    assert task.title == "Test Task"
    assert task.completed == False

    task_dict = task.to_dict()
    assert task_dict['title'] == "Test Task"
    assert 'created_at' in task_dict
