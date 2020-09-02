var yellow = document.getElementById('yellow');
var blue = document.getElementById('blue');
var red = document.getElementById('red');
var green = document.getElementById('green');
var btn = document.getElementsByTagName('button')[0];
var msg = document.getElementById('msg');
var maxlvl = document.getElementsByTagName('h3')[1];

yellow.style.background = 'orange';
blue.style.background = 'darkblue';
red.style.background = 'darkred';
green.style.background = 'darkgreen';

var level = 1;
var levelSpeed = 1000;
var max = 1;
var combo = [];
var picked = [];


for (i = 0; i < 4; i++) {
  var div = document.getElementsByClassName('color')[i];
  div.addEventListener('click', function (e) {
    blink(e.target.id, 100);
    picked.push(e.target.id);
    console.log(picked);
    if (picked.length == combo.length) {
      if (checkSolution()) {
        msg.innerHTML = "Uspesno zavrsen level: " + level;
        level++;
        if (level > max) {
          max = level;
          maxlvl.innerHTML = "Max level achived: " + max;
        }
        levelSpeed -= 100;
        btn.innerHTML = "Start level " + level;
      }
      else {
        msg.innerHTML = "Izabrana kombinacija je netacna";
        level = 1;
        levelSpeed = 1000;
        btn.innerHTML = "Start level " + level;
      }
    }
  })
}

function start() {
  msg.innerHTML = "";
  console.log(levelSpeed);
  picked = [];
  var n = level + 3;
  combo = comboCreate(n);
  console.log(combo);
  for (i = 0; i < combo.length; i ++) {
    (function (i) {
    setTimeout(function () {
      blink(combo[i],levelSpeed);
    }, (2*levelSpeed)*i);
    })(i);
  }
}

function checkSolution() {
  for (i = 0; i < combo.length; i++) {
    if (combo[i] != picked[i]) {
      return false;
      break;
    }
  }
  return true;
}

function blink(element,speed) {
  switch (element) {
    case 'yellow':
      yellow.style.background = 'yellow';
      setTimeout(function() {
        yellow.style.background = 'orange';
      }, speed)
      break;
    case 'blue':
      blue.style.background = 'lightblue';
      setTimeout(function() {
        blue.style.background = 'darkblue';
      }, speed)
      break;
    case 'red':
      red.style.background = 'red';
      setTimeout(function() {
        red.style.background = 'darkred';
      }, speed)
      break;
    case 'green':
      green.style.background = 'lightgreen';
      setTimeout(function() {
        green.style.background = 'darkgreen';
      }, speed)
      break;
    default:

  }
}

function comboCreate(n) {
  var array = [];
  for (i=0;i<n;i++){
    var rand = Math.floor(Math.random() * 100) + 1;
    if (rand <= 25) {
      array.push('yellow');
    }
    else if (rand <=50) {
      array.push('blue');
    }
    else if (rand <= 75) {
      array.push('red');
    }
    else {
      array.push('green');
    }
  }
  return array;
}
