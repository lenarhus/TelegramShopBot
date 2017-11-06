stage 'CI'
node {

    checkout scm

    sh 'npm install'

    
          
}



//parallel integration testing
stage 'Testing'


node {
sh 'npm test -- --coverage'
notify("Deploy to staging?")
input 'Deploy to staging?'
}



// limit concurrency so we don't perform simultaneous deploys
// and if multiple pipelines are executing, 
// newest is only that will be allowed through, rest will be canceled
stage name: 'Deploy to staging', concurrency: 1
node {
    sh 'git https://github.com/NaveenDK/mentalshortcuts.git'
    sh 'npm install'
    sh 'npm run-script build'
    notify 'Mental_shortcuts version 02 test webhook Deployed successfully!'
    
}



def notify(status){
    emailext (
      to: "naveenkolambage@gmail.com",
      subject: "${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      body: """<p>${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        <p>Check console output at <a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a></p>""",
    )
}