document.addEventListener('DOMContentLoaded', function () {
  var colorSelectors = document.querySelectorAll('.color-selector');
  var mainSquare = document.getElementById('main-square');

  colorSelectors.forEach(function(selector) {
      selector.addEventListener('click', function() {
          var color = this.dataset.color;
          fetch(`colorService.php?color=${color}`)
              .then(function(response) { return response.json(); })
              .then(function(data) {
                  if (data.success) {
                      mainSquare.style.backgroundColor = data.color;
                  }
              })
              .catch(function(error) {
                  console.error('There has been a problem with your fetch operation:', error);
              });
      });
  });
});