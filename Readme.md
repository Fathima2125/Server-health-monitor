# 🚀 Server Health Monitor API (Dockerized CI/CD Project)

A production-style **Dockerized Server Health Monitoring API** deployed using **AWS EC2 + GitHub Actions CI/CD pipeline**.

This project demonstrates real-world DevOps practices including automated deployment, containerization, and cloud hosting.

---

# 📌 Project Overview

This project is a **Node.js-based REST API** designed to monitor server health and demonstrate a full CI/CD pipeline.

The API exposes a health-check endpoint that can be used to monitor server/application availability.

It is:

* Dockerized for portability
* Deployed on AWS EC2
* Automatically deployed using GitHub Actions
* Managed via SSH-based deployment pipeline

---

# ⚙️ Tech Stack

* **Backend:** Node.js / Express
* **Containerization:** Docker
* **Cloud Platform:** AWS EC2
* **CI/CD:** GitHub Actions
* **Deployment Method:** SSH-based automation
* **Version Control:** Git & GitHub

---

# 🏗️ Architecture
![](<screenshots/Dockerized Container diagram.png>)

```
GitHub Repo
   ↓ (push to main)
GitHub Actions CI/CD
   ↓ (SSH)
AWS EC2 Instance
   ↓
Docker Container
   ↓
Live API (Port 3000)
```

---

# 🚀 Features

* Health check API endpoint
* Dockerized application
* Automatic deployment on push to `main`
* Zero manual server deployment
* Clean container restart on every deployment

---

# 📡 API Endpoints

### Health Check

```
GET /health
```

Response:

```json
{
  "status": "OK",
  "message": "Server is healthy"
}
```

---

# 🐳 Docker Setup

### Build Image

```bash
docker build -t health-monitor-api .
```

### Run Container

```bash
docker run -d \
  --name health-container \
  -p 3000:3000 \
  health-monitor-api
```

---

# ☁️ AWS EC2 Deployment

The application is deployed on an **AWS EC2 Ubuntu instance**.

Steps involved:

* EC2 instance setup
* Docker installation
* Security group configuration (Port 22 & 3000)
* GitHub Actions SSH-based deployment

---

# 🔄 CI/CD Pipeline (GitHub Actions)

On every push to `main` branch:

1. GitHub Actions runner starts
2. Connects to EC2 via SSH
3. Pulls latest code
4. Stops existing container
5. Builds new Docker image
6. Runs updated container

---

# 🔐 Required GitHub Secrets

| Secret Name | Description                    |
| ----------- | ------------------------------ |
| EC2_HOST    | Public IP of EC2 instance      |
| EC2_SSH_KEY | Private SSH key for EC2 access |

---

# 📦 Project Structure

```
server-health-monitor/
│
├── .github/workflows/deploy.yml
├── src/data/services.js
|--src/routes/monitorRoute.js
├── Dockerfile
├── package.json
├── server.js
└── README.md
```

---
# 🛠️ Tech Stack

## Backend
- Node.js
- Express.js

## DevOps / Cloud
- Docker
- GitHub Actions
- AWS EC2
- Linux (Ubuntu)

## Version Control
- Git
- GitHub

# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone <repo-url>
cd server-health-monitor
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Run Locally

```bash
node src/server.js
```

Test:

```bash
http://localhost:3000/api/health
```

---

# 🐳 Docker Setup

## Build Docker Image

```bash
docker build -t health-monitor-api .
```

## Run Container

```bash
docker run -d --name health-container -p 3000:3000 health-monitor-api
```

---

# ☁️ AWS EC2 Deployment

## Steps Performed

- Created Ubuntu EC2 instance
- Configured security groups
- Opened port 3000
- Connected via SSH
- Installed Docker
- Cloned GitHub repository
- Built Docker image on EC2
- Ran Docker container

---

# 🔄 CI/CD Pipeline

GitHub Actions was configured to automate deployment.

## Workflow

- Push code to GitHub
- GitHub Actions triggers automatically
- Connects to EC2 via SSH
- Pulls latest code
- Rebuilds Docker image
- Restarts container automatically

---

# 📸 Screenshots To Add

## Recommended Screenshots

### 1. API Working in Browser
![API working](<screenshots/API working in browser.png>)

---

### 2. Docker Container Running

![Docker running](<screenshots/Docker container runnng.png>)

### 3. GitHub Actions Successful Workflow

![github actions](<screenshots/GitHub actions Successful workflow.png>)



# ⚠️ Challenges Faced & Solutions

### 1. SSH Authentication Issues

* Problem: Invalid key format and authentication failure
* Solution: Properly formatted PEM key stored in GitHub Secrets

### 2. EC2 Connectivity Timeout

* Problem: GitHub Actions unable to reach EC2
* Solution: Updated Security Group to allow SSH (port 22)

### 3. Docker Port Conflict

* Problem: Port 3000 already in use
* Solution: Added container cleanup before deployment

### 4. Folder Path Issues

* Problem: Incorrect EC2 directory path
* Solution: Fixed case-sensitive folder name in EC2

---

# 📈 What I Learned

* AWS EC2 deployment lifecycle
* Docker containerization
* GitHub Actions CI/CD pipeline
* SSH-based automation
* Real-world DevOps debugging

---

# 🚀 Future Improvements

* Add AWS ECR for container registry
* Add Nginx reverse proxy
* Enable HTTPS using SSL certificates
* Add monitoring using AWS CloudWatch
* Implement zero-downtime deployment

---

# 👨‍💻 Author

### FATHIMA YOSRA AJEEB

Built as part of a hands-on DevOps learning journey focusing on real-world CI/CD pipelines and cloud deployment.

---
