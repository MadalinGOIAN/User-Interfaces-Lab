function ToggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(
        ".navbar .search .container-contact .dark-mode-button")
            .classList
            .toggle("dark-mode");
}

function ValidateForm() {
    var name = document.forms["form"]["nume"].value;

    if (name == "") {
        alert("Numele nu poate fi gol");
        return false;
    }

    var email = document.forms["form"]["email"].value;
    var atPosition = email.indexOf("@");
    var dotPosition = email.indexOf(".");

    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 > email.length) {
        alert("Adresa de e-mail nu este validă");
        return false;
    }

    var feedback = document.forms["form"]["comentarii"].value;

    if (feedback == "") {
        alert("Vă rugăm să completați și câmpul pentru comentarii");
        return false;
    }
}
