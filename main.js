

$('.top-panels .tabs li').on('click', function(){

    var showContent = $(this).attr('rel');

    $('.top-panels .tabs li.active').removeClass('active')
    $('.top-panels .panel.active').slideUp(300, function(){

        $(this).removeClass('active');

        $('#'+showContent).slideDown(300, function(){
            $(this).addClass('active');
        });})



    

    $('.top-panels .tabs .active').removeClass('active');
    

});