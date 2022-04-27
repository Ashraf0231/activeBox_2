$(document).ready(function () {
  $("#reviewSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: "ease-in-out",
    loop: true,
    dots: true,
    arrows: false,
  });
});
$(function () {
  $(".content").slice(4).hide();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".content:hidden").slice(0, 4).slideDown();
    if ($(".content:hidden").length == 0) {
      $("#load").fadeOut("slow");
    }
    $("html,body").animate(
      {
        scrollTop: $(this).offset().top,
      },
      1500
    );
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".totop a").fadeIn();
  } else {
    $(".totop a").fadeOut();
  }
});
$(".totop a]").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    600
  );
  return false;
});
