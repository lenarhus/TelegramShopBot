s   tage 'CI'
node {

    //notify('Started');

   // git branch: 'test01', 
    checkout scm
     //   url: 'https://github.com/NaveenDK/mentalshortcuts.git'

    // pull dependencies from npm
    // on windows use: bat 'npm install'
    sh 'npm install'

    // stash code & dependencies to expedite subsequent testing
    // and ensure same code & dependencies are used throughout the pipeline
    // stash is a temporary archive
    stash name: 'everything', 
          excludes: 'test-results/**', 
          includes: '**'
    
    
    sh 'npm run test -- --coverage'
    
   
    step([$class: 'JUnitResultArchiver', 
          testResults: 'test-results/**/test-results.xml'])
          
}

def notify(status){
    emailext (
      to: "naveenkolambage@gmail.com",
      subject: "${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      body: """<p>${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        <p>Check console output at <a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a></p>""",
    )
}
node{
        notify('Deploy to Staging')
}
input 'Deploy to Staging?'

stage name: 'Deploy' ,concurrency: 1

node{
    sh 'npm run-script build'
    notify 'Mental_shortcuts version 02 test webhook Deployed successfully!'
}


