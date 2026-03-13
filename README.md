# DevOps Project

A complete DevOps demonstration project featuring a containerized web application with FastAPI backend, Next.js frontend, Nginx reverse proxy, Redis caching, and Jenkins CI/CD pipeline.

## 🏗️ Project Structure

```
devops-project/
├── docker-compose.yml
├── .env
├── Jenkinsfile
├── nginx/
│   └── nginx.conf
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── app/
│       ├── main.py
│       ├── database.py
│       ├── models.py
│       ├── routes/
│       │   └── users.py
│       └── worker.py
└── frontend/
    ├── Dockerfile
    ├── package.json
    └── pages/
        └── index.js
```

## 🛠️ Technologies Used

- **Backend**: FastAPI (Python)
- **Frontend**: Next.js (React)
- **Reverse Proxy**: Nginx
- **Database**: PostgreSQL (configured via environment)
- **Cache**: Redis
- **Containerization**: Docker & Docker Compose
- **CI/CD**: Jenkins

## 📋 Prerequisites

- Docker & Docker Compose
- Git
- (Optional) Python 3.11+ for local backend development
- (Optional) Node.js 18+ for local frontend development

## 🚀 Quick Start with Docker

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd devops-project
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```bash
DATABASE_URL=postgresql://user:password@rds-endpoint:5432/appdb
REDIS_HOST=redis
AWS_BUCKET=my-bucket
AWS_REGION=ap-south-1
```

### 3. Run the Application
```bash
docker-compose up -d
```

### 4. Access the Application
- **Main Application**: http://localhost:8080
- **Frontend (direct)**: http://localhost:3000
- **Backend API (direct)**: http://localhost:8000

## 🏃‍♂️ Running Locally (Without Docker)

### Backend Setup
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cd app
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Redis Setup
```bash
docker run -d -p 6379:6379 redis:7
```

## 📡 API Endpoints

### Backend API
- **GET /**: Welcome message
- **GET /api/users**: Returns list of users
  ```json
  {
    "users": ["siva", "devops", "engineer"]
  }
  ```

## 🔧 Configuration

### Nginx Configuration
- Reverse proxy configuration in `nginx/nginx.conf`
- Routes `/` to frontend (port 3000)
- Routes `/api/*` to backend (port 8000)

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_HOST`: Redis hostname
- `AWS_BUCKET`: S3 bucket name
- `AWS_REGION`: AWS region

## 🚢 Deployment

### Using Jenkins Pipeline
1. Set up Jenkins with Docker and SSH plugins
2. Configure credentials for EC2 access
3. Update `Jenkinsfile` with your repository URL and EC2 IP
4. Run the pipeline

### Manual EC2 Deployment
```bash
# On your EC2 instance
git clone <your-repo-url>
cd devops-project
docker-compose up -d
```

## 🔄 CI/CD Pipeline (Jenkins)

The `Jenkinsfile` includes:
- Checkout code
- Build Docker images
- Deploy to EC2 via SSH

### Jenkins Setup Requirements
- Jenkins server with Docker installed
- SSH key pair for EC2 access
- Environment variables:
  - `SERVER_IP`: Your EC2 public IP

## 🐳 Docker Services

### Services Overview
- **nginx**: Reverse proxy on port 8080
- **frontend**: Next.js app on port 3000
- **backend**: FastAPI app on port 8000
- **redis**: Redis cache on port 6379

### Building Images
```bash
docker-compose build
```

### Stopping Services
```bash
docker-compose down
```

## 📊 Monitoring

### Check Container Status
```bash
docker-compose ps
```

### View Logs
```bash
docker-compose logs [service-name]
# Or for all services
docker-compose logs
```

## 🔒 Security Notes

- Update default passwords in `.env`
- Use HTTPS in production
- Configure proper firewall rules
- Use secrets management for sensitive data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is for educational purposes. Modify and use as needed.

## 🆘 Troubleshooting

### Common Issues

**Nginx fails to start**
- Check nginx.conf syntax
- Ensure dependent services are running
- Verify port availability

**Database connection errors**
- Verify DATABASE_URL in .env
- Ensure PostgreSQL is accessible

**Port conflicts**
- Change ports in docker-compose.yml if needed
- Check `netstat -tlnp | grep <port>`

**Permission issues**
- Ensure Docker daemon is running
- Check user permissions for Docker

For more help, check the logs:
```bash
docker-compose logs nginx
docker-compose logs backend
docker-compose logs frontend
```