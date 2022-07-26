require('dotenv').config()
const { config } = require ('./wdio.shared.conf');
//====================
    // Broswer stack cred
    // ====================
    //
config.user=process.env.BROWSERSTACK_USER
config.key=process.env.BROWSERSTACK_KEY
    // ====================
    // Runner Configuration
    // ====================
    //
   // config.port = 4723;
    // ====================
    //Spec files
    // ====================
    config.specs =[
        //'./test/specs/**/*Datepicer-exm-spec.js'
        './test/specs/android/addnode_using_pom_spec.js'
    ];
// ====================
    //capabilites
    // ====================
    config.capabilities = [{
        platformName:"Android",
        "appium:platformVersion" : "11.0",
        "appium:deviceName":"Vivo Y21",
        "appium:automationName":"UIAutomator2",
        "appium:app":"bs://3dd07a4da73926e33dd5c52b4f3a20a2806cfeeb",
        //Allow all app permissions
        "appium:autoGrantPermissions":true
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }]
 // ====================
    // Services
    // ====================
    //
    config.services = ['browserstack']
    exports.config = config;