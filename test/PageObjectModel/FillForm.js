class FillForm{
    get formtxt(){
        // click on login button
        return $('//*[@text="Forms"]')
    }
   
   get addtext(){
    return $("~text-input")
   }
   get gettext(){
    return $("~input-text-result")
   }
   get togle(){
    return $("~switch")
   }
   get togletext(){
    return $("~switch-text")
   }
   get active(){
    // click on Active button button
    return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Active")')
 
}
get dropdc(){
    // click on Active button button
    return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Select an item...")')
 
}
get dropdselecttxt(){
    // click on Active button button
    return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText')
 
}
get dropdselect(){
    // click on Active button button
    return $('//*[@text="This app is awesome"]')
 
}
get activetxt(){
    // click on login button
    return $('//*[@resource-id="android:id/message"]')
}
get logt(){
    // use of wait display api 
     // click on login button
     return $('~Login')
}

}
//module.exports= new Addnotes_obj()
export default  new FillForm();