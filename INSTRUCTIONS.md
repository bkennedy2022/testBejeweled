# Bejeweled
## Running this program:
Download the Bejeweled.html file and the Bejeweled.js file from Github, make sure they're located in the same directory on your machine, and open the .html file in any browser which supports HTML's canvas object (Chrome, Safari, Firefox, and Internet Explorer are all fine). The grid can be regenerated by reloading the page.

## Functions:
Two functions are defined in the Bejewled.js file: testNoMatches and getColors. getColors generates an 8x8 array of random colors by looping through the rows and columns of a 2-dimensional array and randomly generating an integer between 0 and 6, which is used to access a color from the array "colors" and assign it to the current element of the array. getColors also builds in at least one guaranteed match: that is, at some random position in the array, there will be two colors in a row and a third color in a position such that it can be swapped to match three colors in a row.

testNoMatches takes an 8x8 array as a parameter and iterates through the rows and columns to verify that there are no matches; a match is three or more consecutive identical colors. The function returns false if there are one or more more matches in the array and true if there are no matches. 

The JavaScript file accesses the canvas object in the Bejewled.html file and then accesses the canvas's drawing context. The getColors function is called until an array for which testNoMatches is true is generated; that is, until an array of random colors with no matches of three or more colors is generated. This array is then looped through to draw a grid of colored squares. 