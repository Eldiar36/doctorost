/*function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button");
    let links = menu.find("burger-menu_link");
    let overlay = menu.find("burger-menu_overlay");
    button.on("click",(e) => {
        e.preventDefault();
        toogleMenu();
    });
    links.on("click", () => toogleMenu());


    overlay.on("click", () => toogleMenu());
    function toogleMenu() {
        menu.toggleClass('burger-menu_active');
        menu.remove('burger-menu_active');
        if (menu.hasClass('burger-menu_active')) {
            $('body').css("overflow","hidden");
        }
        else  {
            $("body").css("overflow","visible")
        }
    }
    links.on("click", () => removeMenu());
    function removeMenu(){
        links.remove('burger-menu_active');
    }
}
burgerMenu('.burger-menu');*/
$('.burger-menu_button').on(  'click',function () {
    $('.burger-menu').toggleClass('burger-menu_active')
    $('.burger-menu_nav').toggleClass('burger-menu_active')
})
$('.burger-menu_link').on('click',function () {
    $('.burger-menu').removeClass('burger-menu_active')
    $('.burger-menu_nav').removeClass('burger-menu_active')
})
$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 3,
        loop:false,
        dots: true,
        margin:15,
        navText:false,
        animateIn: true,
        autoHeight:true,
        responsive: {
            0: {
                items:1,
                stagePaddingRight: 70
            },
            600: {
                items:2
            },
            900: {
                items:3
            },
            1200: {
                items:3
            },
            1400: {
                items:3

            }

        }

    });
});