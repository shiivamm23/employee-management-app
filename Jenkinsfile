pipeline {

     agent {
        label 'docker'
    }

    environment {
        FRONTEND_IMAGE = "shivammupadhyayy/frontend:v1"
        BACKEND_IMAGE  = "shivammupadhyayy/backend:v1"
    }

    stages {

        stage('Clone') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE frontend/'
            }
        }

        stage('Build Backend') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE backend/'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId:'dockerhub',
                        usernameVariable:'USER',
                        passwordVariable:'PASS'
                    )
                ]) {

                sh '''
                echo $PASS | docker login -u $USER --password-stdin
                '''
                }
            }
        }

        stage('Push Images') {
            steps {

                sh 'docker push $FRONTEND_IMAGE'

                sh 'docker push $BACKEND_IMAGE'
            }
        }

        stage('Deploy') {
            steps {

                sh '''
                docker compose down || true
                docker compose up -d
                '''
            }
        }
    }
}