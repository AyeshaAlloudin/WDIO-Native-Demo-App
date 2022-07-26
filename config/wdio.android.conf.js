let chai= require("chai")
const path = require('path');

const { config } = require ('./wdio.shared.conf');
//====================
    // Broswer stack cred
    // ====================
    //
//config.user='ayeshaalloudin_0F9HaS'
//config.key='z8MxhTRpf8C9Py8sdJmD'
    // ====================
    // Runner Configuration
    // ====================
    //
    config.port = 4723;
    // ====================
    //Spec files
    // ====================
    config.specs =[
        //'./test/specs/**/*Datepicer-exm-spec.js'
        './test/specs/android/fillform.js'
    ];
    
// ====================
    //capabilites
    // ====================
    config.capabilities = [{
        platformName:"Android",
        "appium:platformVersion" : "11.0",
        "appium:deviceName":"emulator 11",
        "appium:automationName":"UIAutomator2",
        "appium:app":path.join(process.cwd(),"./test/Data/app/android/Android-NativeDemoApp-0.4.0.apk") ,
        //Allow all app permissions
        "appium:autoGrantPermissions":true,
        "appium:appPackage": "com.wdiodemoapp",
       "appium:appActivity": ".MainActivity"

       // for chrome report
      
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    config.before= function(){
        global.chaiExpect= chai.expect

    }
 // ====================
    // Services
    // ====================
    //
    config.services=[
        ['appium',{
           args:{
               address: 'localhost',
               port: 4723
           },
           logPath: './'
       }]
       ],
    exports.config = config;