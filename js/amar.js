function checkAnswers() {
    var userInput = document.querySelector('input[name="q1"]').value.toLowerCase(); // Récupère la valeur saisie par l'utilisateur et la convertit en minuscules

    if (userInput === "killyan") {
        window.location.href = "boule.html";
    }     if (userInput === "kiks") {
        window.location.href = "boule.html";
    }    if (userInput === "kik's") {
        window.location.href = "boule.html";
    }
    else {
        document.getElementById("result").innerHTML = "sale merde";
    }
}