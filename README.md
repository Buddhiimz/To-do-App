# 📝 To-Do App

A full-stack **To-Do Application** built using **React (frontend)**, **Flask (backend)**, and **MySQL (database)**.  
This project is containerized using **Docker Compose** for easy deployment and testing.

---

## 🚀 Features

- Add, view, and mark tasks as completed.  
- Backend REST API built with Flask and SQLAlchemy.  
- Frontend built using React.  
- MySQL database for persistent storage.  
- Docker Compose support for running the full stack locally.

---

## 🧩 Tech Stack

| Component | Technology |
|------------|-------------|
| Frontend | React.js |
| Backend | Flask (Python) |
| Database | MySQL |
| Containerization | Docker & Docker Compose |

---

## ⚙️ Project Structure

To-do-App/
├── backend/
│ ├── app/
│ ├── tests/
│ ├── Dockerfile
│ └── requirements.txt
├── frontend/
│ ├── src/
│ ├── public/
│ ├── Dockerfile
│ └── package.json
├── docker-compose.yml
└── README.md


## 🧰 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) (recommended)

---

## 🛠️ Setup & Run (Without Docker Hub)

### 1️. Clone the Repository

git clone https://github.com/Buddhiimz/To-do-App.git

cd To-do-App

### 2️. Run Docker Compose

docker-compose up --build

### 3️. Access the App

Frontend → http://localhost:3000

Backend API → http://localhost:5000

### 4. Running Tests

#### 4.1 Backend tests (run below codes)

cd backend

$env:PYTHONPATH = "${PWD}"

pytest -v

##### 4.2 Frontend tests (run below codes)

cd frontend

npm test

###  Stop Containers

docker-compose down

