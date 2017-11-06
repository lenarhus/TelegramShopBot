stage 'Build '
node{

    //notify('Started');

   // git branch: 'test01', 
    checkout scm
   // pull dependencies from npm

    sh 'npm install'

    
stage 'Unit Testing'
     
    sh 'npm run test -- --coverage'

def notify(status){
    emailext (
      to: "naveenkolambage@gmail.com",
      subject: "${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      body: """<p>${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        <p>Check console output at <a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a></p>""",
    )
}

        notify('Deploy to Staging')

input 'Deploy to Staging after merging?'

stage name: 'Deploy master' ,concurrency: 1

  
    sh 'git https://github.com/NaveenDK/mentalshortcuts.git'
    sh 'npm install'
    sh 'npm run-script build'
    notify 'Mental_shortcuts version 02 test webhook Deployed successfully!'



}