function sommenombrespremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

function estNombrePremier(nombre) {
    if (nombre < 2) {
        return false;
    }
    
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Exemple d'utilisation de la fonction sommenombrespremiers
var premier1 = 5;
var premier2 = 7;

var resultat = sommenombrespremiers(premier1, premier2);

if (resultat !== false) {
    console.log("La somme des nombres premiers " + premier1 + " et " + premier2 + " est : " + resultat);
} else {
    console.log("Au moins l'un des nombres n'est pas premier. Résultat : " + resultat);
}
