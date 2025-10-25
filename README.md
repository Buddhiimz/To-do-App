## 🛠️ Setup & Run

### 1️. Clone the Repository

git clone https://github.com/Buddhiimz/To-do-App.git

cd To-do-App

### 2️. Run Docker Compose

docker compose up -d

### 3️. Access the App

Frontend → http://localhost:3000

Backend API → http://localhost:5000

### 4. Running Tests

#### 4.1 Backend tests (run below codes)

cd backend

& .\venv\Scripts\Activate.ps1

$env:PYTHONPATH = "${PWD}"

pytest -v

##### 4.2 Frontend tests (run below codes)

cd frontend

npm install

npm test

###  Stop Containers

docker-compose down

---

For detailed instructions and setup guidelines, please refer to the Instructions.txt file.

