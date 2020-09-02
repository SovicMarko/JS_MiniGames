function Cell(id) {
  this.mine = false;
  this.revealed = false;
  this.mineCount = 0;
  this.id = id;
  this.draw = "<div id='"+this.id+"' class='cell' onclick='reveal(this)'></div>";
}

Cell.prototype.reveal = function(over) {
  this.revealed = true;
  var node = document.getElementById(this.id);
  node.style.color = 'black';
  if (this.mine) {
    node.innerHTML = "";
    node.style.background = 'radial-gradient(circle, red, yellow)';
  }
  else {
    node.style.background = 'gainsboro';
    if (this.mineCount > 0 && !over)
    {
      node.innerHTML = this.mineCount;
    }
  }
};

Cell.prototype.countMines = function() {
  var i = parseInt(this.id.substring(0,2));
  var j = parseInt(this.id.substring(2,4));
  for(x = -1; x <= 1; x++) {
    for (var y = -1; y <=1; y++) {
      var a = i + x;
      var b = j + y;
      if (a > -1 && b > -1 && a < size && b < size) {
        if(cells[a][b].mine){
          this.mineCount++;
        }
      }
    }
  }
}
