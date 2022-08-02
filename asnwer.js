function findNextSquare(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  var value = Math.sqrt(sq)
  var string = value.toString()
  var result = string.includes(".") ? -1 : Math.pow(value + 1,2) 
  return result
}
