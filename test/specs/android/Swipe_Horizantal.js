describe('Swipe window  ', () => {

    it('Swipe window forword and backword ', async () => {
        driver.pause(7000)
        //click on swap button
        await $("//*[@text='Swipe']").click()
        // Scroll to the horitontal forward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollTextIntoView("COMPATIBLE")')
        // Scroll to the horitontal backward
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollTextIntoView("FULLY OPEN SOURCE")')
        // if need to swips just one one then use this code.
        /*await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
             // Scroll to the horitontal backward
             await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')*/
    })

})