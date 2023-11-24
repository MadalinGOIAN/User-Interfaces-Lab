function ToggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(
        ".navbar .search .container-help .dark-mode-button")
            .classList
            .toggle("dark-mode");
}
