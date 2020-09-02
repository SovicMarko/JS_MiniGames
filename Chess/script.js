var root = document.getElementById('root');
const col = ['a','b','c','d','e','f','g','h'];



// rotiranje table

// istorija poteza



var selectedPiece = null;


function Place(id) {
  this.id = id;
  this.piece = null;

  this.placePiece = function(name,symbol) {
    this.piece = new Piece(name,symbol,this.id);
    document.getElementById(id).innerHTML = symbol;
  }

  this.removePiece = function() {
    document.getElementById(id).innerHTML = "";
    this.piece = null;
  }

}





function drawBoard() {
  for (i = 8; i >= 1; i--) {
    for (j = 0; j < 8; j++) {
      var id = col[j] + i;
      fields[id] = new Place(id);
      if (j % 2 == 0) {
        if (i % 2 == 0)
          root.innerHTML += `<div onclick = fieldClick('${id}') id='${id}' class='feild white'></div>`;
        else
          root.innerHTML += `<div onclick = fieldClick('${id}') id='${id}' class='feild black'></div>`;
      }
      else {
        if (i % 2 == 0)
          root.innerHTML += `<div onclick = fieldClick('${id}') id='${id}' class='feild black'></div>`;
        else
          root.innerHTML += `<div onclick = fieldClick('${id}') id='${id}' class='feild white'></div>`;
      }
    }
  }
}

drawBoard();



function placePeices() {
    fields['e1'].placePiece('whiteKing', "&#9812;");
    fields['d1'].placePiece('whiteQueen',"&#9813;");
    fields['c1'].placePiece('whiteBishup', "&#9815;");
    fields['f1'].placePiece('whiteBishup', "&#9815;");
    fields['b1'].placePiece('whiteKnight',"&#9816;");
    fields['g1'].placePiece('whiteKnight',"&#9816;");
    fields['a1'].placePiece('whiteRook', "&#9814;");
    fields['h1'].placePiece('whiteRook', "&#9814;");

    for (i = 0; i<8;i++)
      fields[col[i]+'2'].placePiece('whitePawn', "&#9817;");

    fields['e8'].placePiece('blackKing', "&#9818;");
    fields['d8'].placePiece('blackQueen', "&#9819;");
    fields['c8'].placePiece('blackBishup', "&#9821;");
    fields['f8'].placePiece('blackBishup', "&#9821;");
    fields['b8'].placePiece('blackKnight',"&#9822;");
    fields['g8'].placePiece('blackKnight',"&#9822;");
    fields['a8'].placePiece('blackRook', "&#9820;");
    fields['h8'].placePiece('blackRook', "&#9820;");
    for (i = 0; i<8;i++)
      fields[col[i]+'7'].placePiece('blackPawn', "&#9823;");
}
placePeices();

function fieldClick(id) {
  console.log(fields[id]);
  if (selectedPiece!= null) {
    clearMoves(selectedPiece.movePlaces);
    clearAttack(selectedPiece.attackPlaces);
    if (selectedPiece.attackPlaces.indexOf(id) > -1) {
      console.log(true);
      fields[id].placePiece(selectedPiece.name, selectedPiece.symbol);
      fields[selectedPiece.position].removePiece();
      clearMoves(selectedPiece.movePlaces);
      clearAttack(selectedPiece.attackPlaces);
    }
  }

  if (fields[id].piece != null) {

    selectedPiece = fields[id].piece;
    selectedPiece.findMoves();
    drawMoves(selectedPiece.movePlaces);
    drawAttack(selectedPiece.attackPlaces);
    console.log("move places");
    console.log(selectedPiece.movePlaces);
    console.log("attack places");
    console.log(selectedPiece.attackPlaces);
    // console.log(selectedPiece.name);
  } else {
    if (selectedPiece != null && selectedPiece.movePlaces.indexOf(id)>-1) {
      fields[id].placePiece(selectedPiece.name, selectedPiece.symbol);
      fields[selectedPiece.position].removePiece();
      clearMoves(selectedPiece.movePlaces);
      clearAttack(selectedPiece.attackPlaces)
    }
    selectedPiece = null;
  }

}

function drawMoves(arr) {
  for(i = 0; i < arr.length;i++) {
    if (fields[arr[i]] && fields[arr[i]].piece == null) {
      document.getElementById(arr[i]).innerHTML = "·";
    }
  }
}

function drawAttack(arr) {
  for(i = 0; i < arr.length;i++) {
      document.getElementById(arr[i]).style.color = "red";
  }
}

function clearAttack(arr) {
  for(i = 0; i < arr.length;i++) {
      document.getElementById(arr[i]).style.color = "black";
  }
}

function clearMoves(arr) {
  for(i = 0; i < arr.length;i++) {
    if (fields[arr[i]] && fields[arr[i]].piece == null) {
      document.getElementById(arr[i]).innerHTML = "";
    }
  }
}
