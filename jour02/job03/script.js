document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('button');
    let compteur = document.getElementById('compteur');
    let count = 0;
  
    button.addEventListener('click', function() {
      addone();
    });
  
    function addone() {
      count++;
      compteur.textContent = count;
    }
  });
  