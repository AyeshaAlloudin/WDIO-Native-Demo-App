class LoginForm{
    get logintxt(){
        // click on login button
        return $('~Login')
    }
   
    get addemail(){
          // add email 
   return  $('~input-email')
   
    }
    get addpassword(){
        // add password
   return  $('~input-password')
   

}

get logintbtn(){
     // Click on login button 

  return  $('//*[@text="LOGIN"]')
}
get asstxt1(){
    // apply assertion text view
return  $('//*[@resource-id="android:id/alertTitle"]')
}
get asstxt2(){
    // apply assertion text view
return  $('//*[@resource-id="android:id/message"]')
}
clickok(){
    return  $('//*[@text="OK"]')
}
}
//module.exports= new Addnotes_obj()
export default  new LoginForm();