window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu"),
    menuItem = document.querySelectorAll(".nav-menu__list-item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("nav-menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("nav-menu_active");
    });
  });
});

$("body").append('<div class="upbtn"></div>');
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".upbtn").css({
      transform: "scale(1)",
    });
  } else {
    $(".upbtn").css({
      transform: "scale(0)",
    });
  }
});
$(".upbtn").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    300
  );
  return false;
});
