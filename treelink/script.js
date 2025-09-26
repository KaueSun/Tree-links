document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".linke").addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/kaue-oliveira-20b35b358?", "_blank");
    });

    document.querySelector(".git").addEventListener("click", function () {
        window.open("https://github.com/KaueSun", "_blank");
    });

    document.querySelector(".ig").addEventListener("click", function () {
        window.open("https://www.instagram.com/kaue_teixeira11", "_blank");
    });

    document.querySelector(".wpp").addEventListener("click", function () {
        window.open("https://wa.me/5582987436200", "_blank");
    });

    document.querySelector(".em").addEventListener("click", function () {
        window.location.href = "mailto:kaueodev11@gmail.com";
    });
});
