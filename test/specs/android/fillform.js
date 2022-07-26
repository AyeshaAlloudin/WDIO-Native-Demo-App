//const addnotes_obj = require("../PageObjectModel/android/Addnotes_obj")
import form from "../../PageObjectModel/FillForm"
describe('Fill form  ', () => {

        it('Add form details ', async () => {
                driver.pause(7000)
                //Access activity directly
                // await driver.startActivity("com.wdiodemoapp","com.wdiodemoapp.MainActivity")

                // click on Form text
                await form.formtxt.click()
                await driver.pause(2000)
                // Add some text 
                await form.addtext.click()
                await form.addtext.addValue('Ayesha')
                // Verify that text   
                const gettxt1 = await form.addtext.getText()
                // apply assertion 
                console.log("First text ", gettxt1)
                await expect(form.gettext).toHaveText(gettxt1)
                // Off toggle button 
                await form.togle.click()
                //Apply assertion
                const gettxt2 = await form.togletext.getText()
                console.log("Second text ", gettxt2)
                await expect(form.togletext).toHaveText("Click to turn the switch OFF")
                // select value from dropdown 
                await (await form.dropdc).click()
                // select value
                await (await form.dropdselect).click()
                // verify drop down text 
                await expect(form.dropdselecttxt).toHaveText("This app is awesome")
                // click on active button 
                await (await form.active).click()
                // verify active button text 
                await expect(form.activetxt).toHaveText("This button is active")
                // accpet alert msg 
                driver.acceptAlert()
                await driver.back()
                await driver.back()
        })
                it('check working for waitforDisplay api', async () => {
                /// check working for waitforDisplay api
                await form.logt.waitForDisplayed({ timeout: 6000 })
                await form.logt.click()
                driver.pause(5000)
                await form.togle.waitForDisplayed({ timeout: 6000 })
                await (await form.togle).click()
                driver.pause(5000)

       
})

})

