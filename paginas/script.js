document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const menu = document.querySelector(".menu");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("menu-open");
    });
});
