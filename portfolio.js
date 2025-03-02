var typed = new Typed (".text", {
    strings : ["MERN DEVELOPER","HTML5","CSS3","JAVASCRIPT","REACTJS","NODEJS","EXPRESSJS","MONGODB"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop: true,
  });

  document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });
});
