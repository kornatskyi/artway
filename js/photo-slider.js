let imgs = $('.container > *');
for (let i = 0; i < imgs.length; i++) {
    $(imgs[i]).css('order', i);
    
    
    
  
    
}


$('.arrow1').on('click', function () {

    for (let i = 0; i < imgs.length; i++) {

        $(imgs[i]).css('order', parseInt($(imgs[i]).css('order')) - 1);

        if ($(imgs[i]).css('order') < 0) {
            $(imgs[i]).css('order', imgs.length - 1)
        }
        console.log($(imgs[i]).position());
        
    }


});



$('.arrow2').on('click', function () {

    for (let i = 0; i < imgs.length; i++) {

        $(imgs[i]).css('order', parseInt($(imgs[i]).css('order')) + 1);

        if ($(imgs[i]).css('order') > imgs.length - 1) {
            $(imgs[i]).css('order', 0)
        }
    }

});