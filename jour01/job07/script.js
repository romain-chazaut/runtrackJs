function jourtravaille(date) {
    var annee = date.getFullYear();
    var mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0, donc on ajoute 1
    var jour = date.getDate();
    var jourSemaine = date.getDay(); // 0 pour dimanche, 1 pour lundi, ...

    var joursFeries2020 = [
        "2023-01-01", // Jour de l'an
        "2023-04-13", // Lundi de Pâques
        "2023-05-01", // Fête du Travail
        "2023-05-08", // Victoire 1945
        "2023-05-21", // Ascension
        "2023-06-01", // Lundi de Pentecôte
        "2023-07-14", // Fête Nationale
        "2023-08-15", // Assomption
        "2023-11-01", // Toussaint
        "2023-11-11", // Armistice 1918
        "2023-12-25" // Noël
    ];

    var dateStr = jour + "/" + mois + "/" + annee;

    if (joursFeries2020.includes(date.toISOString().split("T")[0])) {
        console.log("Le " + dateStr + " est un jour férié.");
    } else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, " + dateStr + " est un week-end.");
    } else {
        console.log("Oui, " + dateStr + " est un jour travaillé.");
    }
}

// Exemple d'utilisation de la fonction jourtravaille avec une date
var dateExemple = new Date("2023-05-08");
jourtravaille(dateExemple);
