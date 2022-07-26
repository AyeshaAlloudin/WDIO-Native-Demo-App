//const addnotes_obj = require("../PageObjectModel/android/Addnotes_obj")
import form from "../../PageObjectModel/FillForm"
describe('Login Form  ', () => {

        it('Get login ', async () => {
                // click on Form text
                await form.formtxt.click()
                await driver.pause(2000)
                // Taking screen shoot of whole screen
                driver.saveScreenshot("./test/screenshots/Homescreen.png")
                // Taking screen shoot of switch button
                // Off toggle button 
                await form.togle.saveScreenshot("./test/screenshots/switch.png")
              
        })
               

})