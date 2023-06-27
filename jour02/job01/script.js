document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('button');
    button.addEventListener('click', function() {
      citation();
    });
  
    function citation() {
      let citationElement = document.getElementById('citation');
      let citationText = citationElement.textContent;
      console.log(citationText);
    }
  });
  