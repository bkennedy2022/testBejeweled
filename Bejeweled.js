var colors = ["DeepPink", "DeepSkyBlue", "ForestGreen", "Gold", "OrangeRed", "MediumPurple", "Chocolate"];

// This function tests for any matches in an 8x8 array of colors and returns false if there are any matches.
// A match is three or more consecutive identical colors in a row or a column.
var testNoMatches = function(gridColors) {

    var prev1;
    var prev2;
    var current;
 
    // test rows
    for (var p = 0; p < 8; p++){
        //get row p
        var row = gridColors[p];

        //first two elements of the row: "previous elements"
        prev1 = row[0];
        prev2 = row[1];

        //start testing from the third element
        for (var q = 2; q < 8; q++) {
            current = row[q];
            if (current === prev1 && current === prev2) { //compare current element with previous elements
                return false; // found 3 in a row!
            }

            //move over "previous elements"
            prev1 = prev2;
            prev2 = current;
        }    
    }

    // test columns
    for (var m = 0; m < 8; m++){
        var col = [];
        
        //get column m
        for (var i = 0; i < 8; i++) {
            col.push(gridColors[i][m])
        }

        //first two elements of the column: "previous elements"
        prev1 = col[0];
        prev2 = col[1];

        //start testing from the third element
        for (var n = 2; n < 8; n++) {
            current = col[n];
            if (current === prev1 && current === prev2) { //compare current element with previous elements
                return false; // found 3 in a row!
            }

            // move over "previous elements"
            prev1 = prev2;
            prev2 = current;           
        }    
    }
    return true;
}

// This function generates a 8x8 array of random colors
var getColors = function() {
    var gridColors = [];

    // Need to build in a guaranteed possible match to make the game playable.
    // Generate the color and position of this guaranteed possible match:
    var matchColor = colors[Math.floor(Math.random()*7)];
    var Xposition = Math.floor(Math.random()*5);
    var Yposition = Math.floor(Math.random()*5);

    for (var i = 0; i < 8; i++) {
        gridColors[i] = [];
        for (var j = 0; j < 8; j++) {

            // Add the guaranteed possible match: two identical colors in a row,
            // and one color that's one row down and one column to the right:
            if (((i == Yposition || i == Yposition+1) && j == Xposition) || (i == Yposition && j == Xposition+1)) {
                gridColors[i][j] = matchColor;
            }

            else { // all other colors in the grid are randomized
                gridColors[i][j] = colors[Math.floor(Math.random()*7)];
            }
        }
    }
    return gridColors;    
}

function draw() {
    var canvas = document.getElementById("gridCanvas");
    var grid = canvas.getContext("2d");

    // generates random colors until an array with no matches is produced
    var gridColors = getColors();
    while (testNoMatches(gridColors) == false) {
        gridColors = getColors();
    }

    // draw the grid
    for (var y = 0; y < 8; y++) {
        for (var x = 0; x < 8; x++) {
            grid.fillStyle = gridColors[y][x];
            grid.fillRect((53*x)+500, (53*y)+100, 50, 50);
        }
    }
}