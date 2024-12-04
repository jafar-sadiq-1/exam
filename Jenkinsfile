pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-nodeapp'
    }

    stages {
        stage('Build') {
            steps {
                // Build Docker image locally
                sh 'docker build -t $IMAGE_NAME:$BUILD_NUMBER .'
            }
        }
    }
}
