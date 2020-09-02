var size = 15;
var numOfMines = 40;

var cells = [];
var table = document.getElementById('table');
var restart = false;

function setUp() {
  for (i = 0; i < size; i++) {
    cells[i] = [];
    for (j = 0; j< size;j++) {
      cells[i][j] = new Cell((i<10?"0"+i:i)+""+(j<10?"0"+j:j));
    }
  }
  var x = 0;
  do {
    var randX =  Math.floor(Math.random() * size);
    var randY =  Math.floor(Math.random() * size);
    if (!cells[randX][randY].mine) {
      cells[randX][randY].mine = true;
      x++;
    }
  } while(x<numOfMines);
}


function draw() {
  table.style.width = "" + (size * 25) + "px";
  for (i = 0; i < size; i++) {
    for (j = 0; j< size;j++) {
      cells[i][j].countMines();
      table.innerHTML += cells[i][j].draw;
    }
    table.innerHTML += "<div style='clear:both; width:0px; height:0px; border:none'>"
  }
}

function reveal(a) {
  console.log(a.id);
  if (!timeStarted) {
    timeStart();
  }
  var i = parseInt(a.id.substring(0,2));
  var j = parseInt(a.id.substring(2,4));
  if (cells[i][j].mine){
    gameOver();
  }
  cells[i][j].reveal();
  if (cells[i][j].mineCount == 0) {
    emptyReveal(i,j);
  }
}

function mark() {
  for (i = 0; i< size*size; i ++) {
    document.getElementsByClassName('cell')[i].addEventListener('mousedown', function(e) {
      var i = parseInt(e.target.id.substring(0,2));
      var j = parseInt(e.target.id.substring(2,4));
      if (e.button == 1 && !cells[i][j].revealed) {
        if (e.target.innerHTML == 'X')
        {
          e.target.innerHTML = '';
          e.target.style.color = 'black';
          markRemoved();
        }
        else {
          e.target.innerHTML = 'X';
          e.target.style.color = 'white';
          markUsed();
        }
      }
    })
  }
}


function emptyReveal(i,j) {
  setTimeout(function () {
    for(x = -1; x <= 1; x++) {
      for (var y = -1; y <=1; y++) {
        var a = i + x;
        var b = j + y;
        if (a > -1 && b > -1 && a < size && b < size) {
          if(!cells[a][b].mine && !cells[a][b].revealed){
            if(cells[a][b].mineCount==0){
              cells[a][b].reveal();
              emptyReveal(a,b);
            }
            else {
              cells[a][b].reveal();
            }
          }
        }
      }
    }
  },50)
}

function gameOver() {
  var over = true;
  for (i = 0; i < size; i++) {
    for (j = 0; j< size;j++) {
      cells[i][j].reveal(over);
    }
  }
  clearInterval(interval);
  timeElapsed = 0;
  timeStarted = false;
}

function newGame() {
  table.innerHTML = "";
  setUp();
  draw();
  mark();
  writeStats(numOfMines);
}

newGame();
