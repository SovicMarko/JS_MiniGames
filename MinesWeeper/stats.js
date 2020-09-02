var stats = document.getElementById('game-stats');

var leftToMark = 0;
var timeElapsed = 0;
var timeStarted = false;
var interval = setInterval(function(){}, 1000);;

function writeStats(numOfMines) {
  leftToMark = numOfMines;
  stats.innerHTML = `<p>Preostalo za označavanje: ` + 
  `<big><b><span id='left'>${leftToMark}</span></b></big></p>` +
  `Proteklo vreme: <big><b><span id='time'>${timeElapsed}</span></b></big>`;
}


function markUsed() {
  leftToMark--;
  document.getElementById('left').innerHTML = leftToMark;
}

function markRemoved() {
  leftToMark++;
  document.getElementById('left').innerHTML = leftToMark;
}

function timeStart() {
  timeStarted = true;
  interval = setInterval(timer, 1000);
}



function timer() {
  timeElapsed++;
  var min;
  var sec;
  if (timeElapsed <= 59) {
    document.getElementById('time').innerHTML = timeElapsed + "";
  }
  else if (timeElapsed > 59) {
    sec = timeElapsed % 60;
    min = Math.floor(timeElapsed / 60);
    document.getElementById('time').innerHTML = min + " : " + (sec<10? "0" + sec: sec);
  }
  else if (restart) {
    timeElapsed = 0;
    document.getElementById('time').innerHTML = "0";
  }
}
