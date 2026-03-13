pipeline {
    agent any

    environment {
        SERVER_IP = 'your-ec2-server-ip'  // Replace with your EC2 public IP
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'  // Replace with your repo URL
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no ec2-user@${SERVER_IP} "
                cd /path/to/your/devops-project  # Adjust path as needed
                git pull origin main
                docker compose down
                docker compose up -d --build
                "
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}