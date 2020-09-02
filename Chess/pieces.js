var fields = [];
function Piece(name,symbol,position) {
  this.name = name;
  this.symbol = symbol;
  this.position = position;
  this.col = col.indexOf(position.substring(0,1));
  this.row = parseInt(position.substring(1));
  this.attackPlaces = [];
  this.movePlaces = [];
  this.color = name.substring(0,5);

  this.findMoves = function () {
    this.attackPlaces = [];
    this.movePlaces = [];
    switch (this.name) {
      case "whitePawn":
        if (this.row === 2) {
          this.movePlaces = [col[this.col] + (this.row + 1) ,
            col[this.col] + (this.row + 2)]
        } else
          this.movePlaces = [col[this.col] + (this.row + 1)];

        if ( fields[col[this.col+1] + (this.row +1)] != undefined
          && fields[col[this.col+1] + (this.row +1)].piece != null
          && this.color != fields[col[this.col+1] + (this.row +1)].piece.color) {
            this.attackPlaces.push(col[this.col+1] + (this.row +1));
        }
        if ( fields[col[this.col-1] + (this.row +1)] != undefined
          && fields[col[this.col-1] + (this.row +1)].piece != null
          && this.color != fields[col[this.col-1] + (this.row +1)].piece.color) {
            this.attackPlaces.push(col[this.col-1] + (this.row +1));
        }
        break;

      case "blackPawn":
        if (this.row === 7) {
          this.movePlaces = [col[this.col] + (this.row - 1) ,
            col[this.col] + (this.row - 2)]
        } else
          this.movePlaces = [col[this.col] + (this.row - 1)];

        if ( fields[col[this.col+1] + (this.row - 1)] != undefined
          && fields[col[this.col+1] + (this.row - 1)].piece != null
          && this.color != fields[col[this.col +1] + (this.row -1)].piece.color) {
            this.attackPlaces.push(col[this.col+1] + (this.row -1));
        }
        if ( fields[col[this.col-1] + (this.row - 1)] != undefined
          && fields[col[this.col-1] + (this.row - 1)].piece != null
          && this.color != fields[col[this.col-1] + (this.row -1)].piece.color) {
            this.attackPlaces.push(col[this.col-1] + (this.row -1));
        }
        break;
      case "whiteKing":
      case "blackKing":
          this.findKingMoves();
        break;
      case "whiteQueen":
      case "blackQueen":
          this.findRookMoves();
          this.findBishupMoves();
        break;
      case "whiteRook":
      case "blackRook":
          this.findRookMoves();
         
        break;
      case "whiteBishup":
      case "blackBishup":
          this.findBishupMoves();
          
        break;
      case "whiteKnight":
      case "blackKnight":
          this.knightMoves();
         
        break;
      default:

    }
  }
}
Piece.prototype.findKingMoves = function () {
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      if (i == 0 && j == 0) {} else {
        if (fields[col[this.col + i] + (this.row + j)] != undefined
        && fields[col[this.col + i] + (this.row + j)].piece != null) {
          if ( this.color != fields[col[this.col + i] + (this.row + j)].piece.color) {
            this.attackPlaces.push(col[this.col + i] + (this.row + j));
          }
        }
        else if (fields[col[this.col + i] + (this.row + j)] != undefined){
          this.movePlaces.push(col[this.col + i] + (this.row + j));
        }
      }
    }
  }
}
// Rook Moves
Piece.prototype.findRookMoves = function () {
  var row = this.row;
  var coll = this.col;
  // moving up
  while (true) {
    if ( fields[col[this.col] + (row+1)] != undefined
      && fields[col[this.col] + (row+1)].piece == null){
      this.movePlaces.push(col[this.col] + (row+1));
      row++;
    }
    else {
      if (fields[col[this.col] + (row+1)] != undefined
        && fields[col[this.col] + (row+1)].piece != null
        && this.color != fields[col[this.col] + (row+1)].piece.color) {
          console.log(true);
          this.attackPlaces.push(col[this.col] + (row+1));
        }

      row = this.row;
      break;
    };
  }
  // moving down
  while (true) {
    if ( fields[col[this.col] + (row-1)] != undefined
      && fields[col[this.col] + (row-1)].piece == null){
      this.movePlaces.push(col[this.col] + (row-1));
      row--;
    }
    else {
      if (fields[col[this.col] + (row-1)] != undefined
        && fields[col[this.col] + (row-1)].piece != null
        && this.color != fields[col[this.col] + (row-1)].piece.color) {
          console.log(true);
          this.attackPlaces.push(col[this.col] + (row-1));
        }

      row = this.row;
      break;
    };
  }
  // moving right
  while (true) {
    if ( fields[col[coll+1] + row] != undefined
      && fields[col[coll+1] + row].piece == null){
      this.movePlaces.push(col[coll+1] + row);
      coll++;
    }
    else {
      if (fields[col[coll+1] + row] != undefined
        && fields[col[coll+1] + row].piece != null
        && this.color != fields[col[coll+1] + row].piece.color) {
          console.log(true);
          this.attackPlaces.push(col[coll+1] + row);
        }

      coll = this.col;
      break;
    };
  }
  // moving left
  while (true) {
    if ( fields[col[coll-1] + row] != undefined
      && fields[col[coll-1] + row].piece == null){
      this.movePlaces.push(col[coll-1] + row);
      coll--;
    }
    else {
      if (fields[col[coll-1] + row] != undefined
        && fields[col[coll-1] + row].piece != null
        && this.color != fields[col[coll-1] + row].piece.color) {
          console.log(true);
          this.attackPlaces.push(col[coll-1] + row);
        }
      coll = this.col;
      break;
    };
  }

};
// Bishup Moves
Piece.prototype.findBishupMoves = function() {

  var i = 1;
    // up right
  while (true) {

    if (fields[col[this.col + i] + (this.row + i)] != undefined
    && fields[col[this.col + i] + (this.row + i)].piece == null) {
      this.movePlaces.push(col[this.col + i] + (this.row + i));
      i++;
    } else {
      if (fields[col[this.col + i] + (this.row + i)] != undefined
        && fields[col[this.col + i] + (this.row + i)].piece != null
        && this.color != fields[col[this.col + i] + (this.row + i)].piece.color) {
          console.log(true);
          this.attackPlaces.push(col[this.col + i] + (this.row + i));
        }

      i = 1;
      break;
    }
  }

  // downLeft
  while (true) {
    if (fields[col[this.col - i] + (this.row - i)] != undefined
    && fields[col[this.col - i] + (this.row - i)].piece == null) {
      this.movePlaces.push(col[this.col - i] + (this.row - i));
      i++;
    } else {
      if (fields[col[this.col - i] + (this.row - i)] != undefined
        && fields[col[this.col - i] + (this.row - i)].piece != null
        && this.color != fields[col[this.col - i] + (this.row - i)].piece.color) {
          console.log(true);
          this.attackPlaces.push(col[this.col - i] + (this.row - i));
        }

      i = 1;
      break;
    }
  }

  while (true) {
    if (fields[col[this.col + i] + (this.row - i)] != undefined
    && fields[col[this.col + i] + (this.row - i)].piece == null) {
      this.movePlaces.push(col[this.col + i] + (this.row - i));
      i++;
    } else {
      if (fields[col[this.col + i] + (this.row - i)] != undefined
        && fields[col[this.col + i] + (this.row - i)].piece != null
        && this.color != fields[col[this.col + i] + (this.row - i)].piece.color) {
          console.log(true);
          this.attackPlaces.push(col[this.col + i] + (this.row - i));
        }

      i = 1;
      break;
    }
  }

  while (true) {
    if (fields[col[this.col - i] + (this.row + i)] != undefined
    && fields[col[this.col - i] + (this.row + i)].piece == null) {
      this.movePlaces.push(col[this.col - i] + (this.row + i));
      i++;
    } else {
      if (fields[col[this.col - i] + (this.row + i)] != undefined
        && fields[col[this.col - i] + (this.row + i)].piece != null
        && this.color != fields[col[this.col - i] + (this.row + i)].piece.color) {
          console.log(true);
          this.attackPlaces.push(col[this.col - i] + (this.row + i));
        }

      i = 1;
        break;
    }
  }

}

Piece.prototype.knightMoves = function () {
  let rowMoves = [-1,1,-2,2,-2,2,-1,1], r = 0;
  for (i = -2; i<=2; i++){
    for (j=0;j<2;j++) {
      if (i != 0) {
        if (fields[col[this.col + i] + (this.row + rowMoves[r])] != undefined
        && fields[col[this.col + i] + (this.row + rowMoves[r])].piece == null)
          this.movePlaces.push(col[this.col + i] + (this.row + rowMoves[r]));
        else {
          if ( fields[col[this.col + i] + (this.row + rowMoves[r])] != undefined
          && fields[col[this.col + i] + (this.row + rowMoves[r])].piece != null
          && this.color != fields[col[this.col + i] + (this.row + rowMoves[r])].piece.color)
          this.attackPlaces.push(col[this.col + i] + (this.row + rowMoves[r]));
        }
          r++
      }

    }
  }
    // this.movePlaces.push(col[this.col - 2] + (this.row - 1)); 1
    // this.movePlaces.push(col[this.col - 2] + (this.row + 1)); 3
    // this.movePlaces.push(col[this.col - 1] + (this.row - 2)); -1
    // this.movePlaces.push(col[this.col - 1] + (this.row + 2)); 3
    // this.movePlaces.push(col[this.col + 1] + (this.row - 2)); -3
    // this.movePlaces.push(col[this.col + 1] + (this.row + 2)); 1
    // this.movePlaces.push(col[this.col + 2] + (this.row - 1)); -3
    // this.movePlaces.push(col[this.col + 2] + (this.row + 1)); -1
}
