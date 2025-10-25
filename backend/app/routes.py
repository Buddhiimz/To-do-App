# app/routes.py

from flask import Blueprint, request, jsonify
from .models import db, Task

# Create a Blueprint for main routes
main_bp = Blueprint("main", __name__)

#  Retrieve the 5 most recent incomplete tasks.
@main_bp.route("/api/tasks", methods=["GET"])
def get_tasks():
    
    tasks = Task.query.filter_by(completed=False).order_by(Task.created_at.desc()).limit(5).all()
    # Convert tasks to dictionaries for JSON response
    return jsonify([t.to_dict() for t in tasks]), 200

#  Create a new task with a title and optional description.
#  Validates that title is provided.
@main_bp.route("/api/tasks", methods=["POST"])
def create_task():

    data = request.get_json() or {}
    title = data.get("title")
    desc = data.get("description", "")
    
    # Input validation
    if not title or title.strip() == "":
        return jsonify({"error": "Title is required"}), 400

    # Create and save task
    task = Task(title=title.strip(), description=desc)
    db.session.add(task)
    db.session.commit()
    
    return jsonify(task.to_dict()), 201

#  Mark a task as completed by its ID.
#  Returns 404 if task does not exist.
@main_bp.route("/api/tasks/<int:task_id>/done", methods=["POST"])
def mark_done(task_id):
 
    task = db.session.get(Task, task_id)  # Fetch task by primary key
    
    if not task:
        return jsonify({"error": "Not found"}), 404

    task.completed = True
    db.session.commit()
    
    return jsonify(task.to_dict()), 200
