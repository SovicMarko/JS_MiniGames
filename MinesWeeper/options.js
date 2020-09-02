var options = document.getElementById('options');
options.innerHTML += "<p>Velicina: <input type='number' value='15' max='20' min='10'></p>";
options.innerHTML += "<p>Broj mina: <input type='number' value='40'></p>";
options.innerHTML += "<button onclick='start()'>Start</button>";
options.innerHTML += "<button onclick='cancel()'>Cancel</button>";

options.style.display = 'none';
var displayed = false;

function toggleOptions() {
  if (!displayed) {
    options.style.display = 'block';
    displayed = true;
  }
  else {
    options.style.display = 'none';
    displayed = false;
  }
}

function start() {
  size = document.getElementsByTagName('input')[0].value;
  numOfMines = document.getElementsByTagName('input')[1].value;
  options.style.display = 'none';
  newGame();
}

function cancel() {
  options.style.display = 'none';
}
