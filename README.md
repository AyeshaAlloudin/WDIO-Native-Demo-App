===============USE THIS COMAND FOR SIMPLE RUN===================
 npx wdio config/wdio.android.conf.js
==>read this link before integrate with broswer stack 
https://webdriver.io/docs/browserstack-service
==>use this comand for run 
 npx wdio config/wdio.android.bs.conf.js
==> use this link for secret cred
https://www.npmjs.com/package/dotenv
==> add this secret cred in github repo
==> Integrade stack over fllow with github.
https://webdriver.io/docs/githubactions/
==> add these three lines in ci.yml file 
 
 env:
            BROWSERSTACK_USER: ${{ secrets.BS_USER }}
            BROWSERSTACK_KEY: ${{ secrets.BS_KEY }}
          run:  npx wdio config/wdio.android.bs.conf.js 
          *********** For chai Assertion *************
          npm i chai --save-dev
          then go to config file and add following comands
          at top 
          let chai= require("chai")
          after category 
           }],
    config.before= function(){
        global.chaiExpect= chai.expect
