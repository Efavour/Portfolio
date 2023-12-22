function splitScroll(){
    const controller = new ScrollMagic.controller();

    new ScrollMagic.Scene({
        duration: 500,
        triggerElement: '.work-title',
        triggerHook: 0
    })
        .setPin('.work-title')
        .addIndicators()
        .addTo(controller)
}

splitScroll(){

}