pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    bat 'docker build -t jafarsadiq1/node-js-app .'
                }
            }
        }
    }
}
