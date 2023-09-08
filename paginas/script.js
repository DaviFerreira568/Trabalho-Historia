document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".menu-toggle");
    const menu = document.querySelector(".menu");
    const content = document.querySelector(".content");

    toggleButtons.forEach(function (toggleButton) {
        toggleButton.addEventListener("click", function () {
            menu.classList.toggle("menu-open");
            content.classList.toggle("menu-open");
        });
    });
});
