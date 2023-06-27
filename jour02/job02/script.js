document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('button');
    button.addEventListener('click', function() {
      showhide();
    });
  
    function showhide() {
      let article = document.getElementById('article');
      if (article.style.display === 'none') {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    }
  });
  