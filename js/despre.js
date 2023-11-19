function ToggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(
        ".navbar .search .container-about .social-media-icons .dark-mode-button")
            .classList
            .toggle("dark-mode");
}
