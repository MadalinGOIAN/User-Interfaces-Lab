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

function HighlightSearchResults() {
    var searchQuery = document.querySelector('input[type=search]').value.toLowerCase();
    var cards = document.querySelectorAll('.card');
    var i = 0;

    cards.forEach(function(card) {
        var cardText = card.textContent.toLowerCase();
        var startIndex = cardText.indexOf(searchQuery);

        if (startIndex !== -1) {
            if (i == 0) {
                var highlightedText = "<div class=\"card\">" + 
                                      "<img class=\"card-img-top\" src=\"res/img/games/Doom.jpeg\" alt=\"Card image cap\">" +
                                      "<div class=\"card-body\">" +
                                      "<p class=\"card-text game-title\">" +
                                      cardText.substring(0, startIndex) +
                                      "<span class='highlighted'>" +
                                      cardText.substring(startIndex, startIndex + searchQuery.length) +
                                      "</span>" +
                                      cardText.substring(startIndex + searchQuery.length) +
                                      "</p></div></div>";
            }

            card.innerHTML = highlightedText;
        }
    });
}

function ClearHighlight() {
    var cards = document.querySelectorAll('.card');
    var i = 0;

    cards.forEach(function(card) {
        if (i == 0) {
            card.innerHTML =
            "<div class=\"card\">" +
                "<img class=\"card-img-top\" src=\"res/img/games/Fortnite.jpg\" alt=\"Card image cap\">" +
                "<div class=\"card-body\">" +
                    "<p class=\"card-text game-title\">Fortnite</p>" +
                    "<p class=\"card-text game-developer\">Epic Games</p>" +
                "</div>" +
            "</div>";
        }
        else if (i == 1) {
            card.innerHTML =
            "<div class=\"card\">" +
                "<img class=\"card-img-top\" src=\"res/img/games/Doom.jpeg\" alt=\"Card image cap\">" +
                "<div class=\"card-body\">" +
                    "<p class=\"card-text game-title\">Doom</p>" +
                    "<p class=\"card-text game-developer\">Bethesda</p>" +
                "</div>" +
            "</div>";
        }
        else if (i == 2) {
            card.innerHTML =
            "<div class=\"card\">" +
                "<img class=\"card-img-top\" src=\"res/img/games/Portal2.jpg\" alt=\"Card image cap\">" +
                "<div class=\"card-body\">" +
                    "<p class=\"card-text game-title\">Portal 2</p>" +
                    "<p class=\"card-text game-developer\">Valve</p>" +
                "</div>" +
            "</div>";
        }
        else if (i == 3) {
            card.innerHTML =
            "<div class=\"card\">" +
                "<img class=\"card-img-top\" src=\"res/img/games/Sims4.jpg\" alt=\"Card image cap\">" +
                "<div class=\"card-body\">" +
                    "<p class=\"card-text game-title\">The Sims 4</p>" +
                    "<p class=\"card-text game-developer\">EA</p>" +
                "</div>" +
            "</div>";
        }

        i++;
    });
}
