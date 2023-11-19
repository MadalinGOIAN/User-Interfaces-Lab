function GoToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function ToggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(
        ".navbar .search .container-popular-section .container-your-games-section .dark-mode-button")
            .classList
            .toggle("dark-mode");

    var cards = document.querySelectorAll(".card");
    cards.forEach(function(card) {
        card.classList.toggle("dark-mode");
    });

    document.getElementById("go-top-button").classList.toggle("dark-mode");
}
