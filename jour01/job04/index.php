<!DOCTYPE html>
<html>
<head>
    <script src="script.js"></script>
    <style>
        .result {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Vérification d'année bissextile</h1>

    <?php
        // Exemple d'utilisation de la fonction bisextile avec l'année 2024
        $annee = 2024;
        $resultat = '<script>document.write(bisextile(' . $annee . '));</script>';

        echo '<p>L\'année <span class="year">' . $annee . '</span> est-elle bissextile ?</p>';
        echo '<p class="result">Résultat : ' . $resultat . '</p>';
    ?>
</body>
</html>
