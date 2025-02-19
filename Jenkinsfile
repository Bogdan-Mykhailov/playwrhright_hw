pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Run Linters') {
            steps {
                script {
                    bat 'run-s format:fix lint'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    bat 'npx playwright test'
                }
            }
        }

        stage('Run HTML Report') {
            steps {
                script {
                    bat 'npx playwright show-report'
                }
            }
        }
    }
}
