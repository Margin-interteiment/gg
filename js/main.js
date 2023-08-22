$(function () {


$(".menu__item a, .logo, .header__icon").on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr("href"),
    top = $(id).offset().top;
  $("body,html").animate({ scrollTop: top }, 1600);
});







$(".burger, .menu__item a").on("click", function () {
  $(".menu__list").toggleClass("menu__list--active");
  $(".burger").toggleClass("burger__btn--active");
  $("body").toggleClass("lock");
});



var header = $(".header__top");
var scrollChange = 10;
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= scrollChange) {
    header.addClass("bg");
  } else {
    header.removeClass("bg");
  }


//   if ($(this).scrollTop() > 10) {
//   header.css({
//     padding: "20px 0",
  
//   });

//   logo.css({
//    padding:"12px 0",
//   });

// }  

// else {
//   if ($(this).scrollTop() < 10) {
//  header.css({
//     padding: "75px 0",
  
//   });
// }
// }

});









  var mixer = mixitup(".portfolio__content");
});
