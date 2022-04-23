//Hide Loading when page is loaded
$(window).on('load', () => {
    if ($('.page-load').length) {
        $('.page-load').delay(100).fadeOut('slow', () => {
            $(this).remove();
        });
    }
});


//change header background color
$(window).on('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
});


//Hide Loading when page is loaded
$(window).on('load', () => {
    if ($('.page-load').length) {
        $('.page-load').delay(100).fadeOut('slow', () => {
            $(this).remove();
        });
    }
});


//show or hide scroll to top btn & change header background color
$(window).on('scroll' , () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('.scroll-to-top').css('display', 'flex');
        $('header').css('background', 'rgba(40, 58, 90, 0.9)');
    } else {
        $('.scroll-to-top').css('display', 'none');
        $('header').css('background', '#37517e');

    }
});


//active navbar Anchors when scroll

const listOfSections = $('section');

$(window).on('scroll',()=> {

    let currentPosition = $(this).scrollTop() + 200;

    listOfSections.each(function () {
        let sectionTop = $(this).offset().top,
            sectionBottom = sectionTop + $(this).outerHeight();

        if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
            if (currentPosition <= sectionBottom) {
                $('.navbar ul li a').removeClass('active');
            }
            $('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
        
    })
}
) 


//scroll To Section when nav anchor clicked
$('.navbar ul li a').on('click', function(event){
    event.preventDefault(); 
    
    let sectionID = $(this).attr('href');

    let sectionPosition = $(sectionID).offset().top;


    //hide navbar in mobile and change navbar icon
    $(".navbar-collapse").collapse('hide');

    //scroll to section smoothly
    $('html , body').animate({
        scrollTop: sectionPosition
    },1100);
    
   
})



  function scrollToTop() {
    var position = document.body.scrollTop = 0;
    window.scroll({
        top: position,
        behavior: "smooth"
    })

}

git