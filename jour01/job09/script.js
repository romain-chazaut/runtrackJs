function tri(numbers, order) {
    var sortedNumbers = numbers.slice(); // Copie du tableau pour ne pas modifier l'original

    if (order === "asc") {
        sortedNumbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        sortedNumbers.sort(function(a, b) {
            return b - a;
        });
    }

    return sortedNumbers;
}

var numbers = [66, 7, 44, 84, 29];
var order = "asc";

var sortedNumbers = tri(numbers, order);
console.log(sortedNumbers);
