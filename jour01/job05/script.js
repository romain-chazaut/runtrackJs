function afficherjourssemaines() {
    var jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    var joursListe = document.getElementById("jours-semaine");

    for (var i = 0; i < jourssemaines.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = jourssemaines[i];
        joursListe.appendChild(listItem);
    }
}
