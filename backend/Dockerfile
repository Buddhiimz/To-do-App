
# backend Docker file
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .

# Upgrade pip first
RUN python -m pip install --upgrade pip

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV FLASK_APP=app
ENV PYTHONUNBUFFERED=1

EXPOSE 5000

CMD ["python", "-m", "app"]

