document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const menu = document.querySelector(".menu");
    const content = document.querySelector(".content");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("menu-open");
        content.classList.toggle("menu-open");
    });
});
