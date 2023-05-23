const wordSearch = (letters, word) => {

    //check empty matrix
    if (letters.length === 0) {
        return true;
    }

    // code to search word horizontally
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word))
            return true
    }

    //transpose the matrix
    var lettersTranspose = [], col, row;
    col = letters[0].length;
    row = letters.length;
    for (var y = 0; y < col; y++) {
        lettersTranspose[y] = [];
        for (var x = 0; x < row; x++) {
            lettersTranspose[y][x] = letters[x][y];
        }
    }

    // code to search word vertically
    const verticalJoin = lettersTranspose.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word))
            return true
    }

    return false;
}

module.exports = wordSearch