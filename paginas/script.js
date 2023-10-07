document.addEventListener("DOMContentLoaded", function () {
    const ativarBotao = document.getElementById("ativar-botao");
    const menu = document.querySelector(".menu");
    const content = document.querySelector(".content");

    ativarBotao.addEventListener("click", function () {
        menu.classList.toggle("menuAberto");
        content.classList.toggle("menuAberto");
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !ativarBotao.contains(event.target)) {
            menu.classList.remove("menuAberto");
            content.classList.remove("menuAberto");
        }
    });
});
