setTimeout(() => {
    $('.preloader').addClass('hidden');
}, 1500);
var swiper = new Swiper(".myHomeSlider", {
    spaceBetween: 30,
    effect: "fade",
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
$(document).ready(
    $('.book-class').hover(
        function () {
            $(this).text("BOOK NOW");
        },
        function () {
            $(this).text("BOOK YOUR FIRST CLASS FREE");
        }
    )
);
$(document).ready(function(){
    $(function toTop() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.site-header.home').addClass('bg-gray');
            } else {
                $('.site-header.home').removeClass('bg-gray');
            }
        });
    });           
  });

$('.mobile-toggle').click(function () {
    $('#sidemenu').addClass('show-menu');
    $('span.close-menu').addClass('overlay');
});
$('.close-menu').click(function () {
    $('#sidemenu').removeClass('show-menu');
    $('span.close-menu').removeClass('overlay');
});
$('.book-class').click(function () {
    $('#classModal').addClass('show-modal');
    $('body').css('overflow', 'hidden');
});
$('.close-modal').click(function () {
    $('#classModal').removeClass('show-modal');
    $('body').css('overflow', 'auto');
});

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
