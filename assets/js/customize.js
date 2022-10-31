$('.AOD_name').each(function(){
    $(this).hover(function(){
        $(this).children().show();
    }, function(){
        $(this).children().hide();
    })
})