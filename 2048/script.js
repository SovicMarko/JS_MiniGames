var root = document.getElementById('root');
var grid = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
]

var previousGrid;

function rememberGrid() {
  var temp = [];
  for (i = 0; i< 4; i++) {
    temp.push([]);
    for (j = 0; j<4;j++) {
      temp[i].push(grid[i][j]);
    }
  }
  return temp;
};

function draw() {
  addNums(2);
  for (i =0; i < 4;i++) {
    for(j=0; j<4; j++){
      root.innerHTML+= "<div class='cell' id='"+i+""+j+"'>"+ (
      grid[i][j] != 0? grid[i][j]:"")+"</div>"
    }
    root.innerHTML+="<div class='break'>";
  }
  previousGrid = rememberGrid();
  write();
}

function addNums(n) {
  var x = 0;
  while (x < n){
    var randX = Math.floor(Math.random() * 4);
    var randY = Math.floor(Math.random() * 4);
    if (grid[randX][randY] == 0) {
      var rand = Math.floor(Math.random()*100);
      grid[randX][randY] = rand>25? 2 : 4;
      x++;
    }
  }
}


function write() {
  for(var a = 0; a < 4; a++) {
    for (var b = 0; b < 4; b++) {
      var element = document.getElementById(a+""+b);
      var value = grid[a][b];
      if (value != 0) {
        element.innerHTML = value;
        element.style.color = 'black';
        switch (value) {
          case 2:
            element.style.backgroundColor = '#ffefa0';
            break;
          case 4:
            element.style.backgroundColor = '#f7e176';
            break;
          case 8:
            element.style.backgroundColor = '#f7c975';
            break;
          case 16:
            element.style.backgroundColor = '#f79c75';
            break;
          case 32:
            element.style.backgroundColor = '#f78275';
            break;
          case 64:
            element.style.backgroundColor = '#db9999';
            break;
          default:

        }
      }
      else {
        element.innerHTML = "";
        element.style.color = 'white';
        element.style.backgroundColor = 'white'
      }
    }
  }
}


document.addEventListener("keypress", function(event) {
  console.log(event.keyCode);
  if (event.keyCode == 119) {
    previousGrid = rememberGrid();
    moveUp();
  }
  if (event.keyCode == 115) {
    previousGrid = rememberGrid();
    moveDown();
  }
  if (event.keyCode == 100) {
    previousGrid = rememberGrid();
    moveRight();
  }
  if (event.keyCode == 97) {
    previousGrid = rememberGrid();
    moveLeft();
  }

})

function sortRight() {
  var changed = false;
  for (i=0;i<4;i++) {
    for (var k = 0; k < 3; k++) {
      if (grid[i][k] != 0 && grid[i][k+1] == 0) {
        grid[i][k+1] = grid[i][k];
        grid[i][k] = 0;
        write();
        changed = true;
      }
    }
  }
  return changed;
}

function sortDown() {
  var changed = false;
  for (i = 0; i < 4; i++) {
    for (var k = 0; k < 3; k++) {
      if (grid[k][i] != 0 && grid[k+1][i] == 0) {
        grid[k+1][i] = grid[k][i];
        grid[k][i] = 0;
        write();
        changed = true;
      }
    }
  }
  return changed;
}




function moveRight() {
  var changed = false;
  changed = sortRight();
  sortRight();
  sortRight();
  for(i=0;i<4;i++) {
    for (var j = 3; j >= 1; j--) {
      if (grid[i][j] != 0 && grid[i][j] == grid[i][j-1]) {
        grid[i][j] += grid[i][j-1];
        grid[i][j-1] = 0;
        write();
        changed = true;
        j--;
      }
    }
  }
  sortRight();
  sortRight();
  if (changed)
  {
    addNums(1);
    write();
  }
}

function moveDown() {
  var changed = false;
  changed = sortDown();
  sortDown();
  sortDown();
  for(i=0;i<4;i++) {
    for (var j = 3; j >= 1; j--) {
      if (grid[j][i] != 0 && grid[j][i] == grid[j-1][i]) {
        grid[j][i] += grid[j-1][i];
        grid[j-1][i] = 0;
        write();
        changed = true;
        j--;
      }
    }
  }
  sortDown();
  sortDown();
  if (changed)
  {
    addNums(1);
    write();
  }
}



function undo() {
  grid = previousGrid;
  write();
}

function sortLeft() {
  var changed = false;
  for (var i = 0; i < 4; i++) {
    for (var k = 3; k > 0; k--) {
      if (grid[i][k] != 0 && grid[i][k-1] == 0) {
        grid[i][k-1] = grid[i][k];
        grid[i][k] = 0;
        write();
        changed = true;
      }
    }
  }
  return changed;
}

function sortUp() {
  var changed = false;
  for (var i = 0; i < 4; i++) {
    for (var k = 3; k > 0; k--) {
      if (grid[k][i] != 0 && grid[k-1][i] == 0) {
        grid[k-1][i] = grid[k][i];
        grid[k][i] = 0;
        write();
        changed = true;
      }
    }
  }
  return changed;
}

function moveLeft() {
  var changed = false;
  changed = sortLeft();
  sortLeft();
  sortLeft();
  for (i=0; i<4; i++) {
    for (var j = 0; j < 3; j++) {
      if (grid[i][j] != 0 && grid[i][j] == grid[i][j+1]) {
        grid[i][j] += grid[i][j+1];
        grid[i][j+1] = 0;
        write();
        changed = true;
        j++;
      }
    }
  }
  sortLeft();
  sortLeft();
  if (changed)
  {
    addNums(1);
    write();
  }
}

function moveUp(){
  var changed = false;
  changed = sortUp();
  sortUp();
  sortUp();
  for (i=0; i<4; i++) {
    for (var j = 0; j < 3; j++) {
      if (grid[j][i] != 0 && grid[j][i] == grid[j+1][i]) {
        grid[j][i] += grid[j+1][i];
        grid[j+1][i] = 0;
        write();
        changed = true;
        j++;
      }
    }
  }
  sortUp();
  sortUp();
  if (changed)
  {
    addNums(1);
    write();
  }
}



draw();
