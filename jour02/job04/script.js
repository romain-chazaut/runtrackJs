document.addEventListener('keydown', function(event) {
    let keylogger = document.getElementById('keylogger');
  
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      let letter = event.key.toLowerCase();
  
      if (document.activeElement === keylogger) {
        keylogger.value += letter + letter;
      } else {
        keylogger.value += letter;
      }
    }
  });
  