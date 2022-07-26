//const addnotes_obj = require("../PageObjectModel/android/Addnotes_obj")
import login from "../../PageObjectModel/LoginForm"
describe('Login Form  ', () => {

   it('Get login ', async () => {
      driver.pause(7000)
      //Access activity directly

      // await driver.startActivity("com.wdiodemoapp","com.wdiodemoapp.MainActivity")

      // click on login text
      await login.logintxt.click()
      await driver.pause(2000)

      // click email field 
      // await login.addemail.click()
      // add email 
      await login.addemail.addValue("a@a.com")
      await driver.pause(2000)
      // click password field 
      //await login.addpassword.click()
      // add password 
      await login.addpassword.addValue("12345678")
      await driver.pause(2000)

      await login.logintbtn.click()
      // apply assertions edit button should display 
      await driver.pause(2000)

      // apply assertion text view
      await expect(login.asstxt1).toHaveText("Success")
      await driver.pause(2000)
      await expect(login.asstxt2).toHaveText("You are logged in!")
      await driver.pause(2000)
      await driver.acceptAlert()

   })

})

