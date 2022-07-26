class Addnotes_obj{
    get skipbtn(){
        // click on skip button
        return $('//*[@text="SKIP"]')
    }
    get addnot(){
   // Apply assertion to verify text add notes at home screen 
        return  $('//*[@text="Add note"]')
    }
     get txtclk(){   
         // click on text
   return  $('//*[@text="Text"]')
    } 
    get assedit(){
         // apply assertion
  return  $('//*[@text="Editing"]')
    }
    get addtitle(){
          // add title 
   return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
   
    }
    get addbody(){
        // add body 
   return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
   

}
async savenotes(){
      // go back 
   await driver.back()
   await driver.back()
}
get asseditbtn(){
     // apply assertions edit button should display 

  return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
}
get asstxt(){
    // apply assertion text view
return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
}
}
//module.exports= new Addnotes_obj()
export default  new Addnotes_obj();