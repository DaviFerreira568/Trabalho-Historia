document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const menu = document.querySelector(".menu");
    const content = document.querySelector(".content");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("menu-open");
        content.classList.toggle("menu-open");
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
            menu.classList.remove("menu-open");
            content.classList.remove("menu-open");
        }
    });
});
