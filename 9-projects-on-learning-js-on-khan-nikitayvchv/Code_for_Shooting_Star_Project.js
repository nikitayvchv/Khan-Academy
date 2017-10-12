//Shooting stars!

//Variables
var xPos = -5;
var yPos = 31;
var aPos = 311;
var bPos = -14;

//Function to animate
draw = function() {
    //no outline on stars
    noStroke();
    //Background
    background(17, 13, 71);
    
    //background stars
    fill(255, 255, 255);
    ellipse(235,109,5,5);
    ellipse(315,22,5,5);
    ellipse(33,216,5,5);
    ellipse(165,341,5,5);
    ellipse(294,281,5,5);
    ellipse(67,42,5,5);
    
    //main stars
    fill(255, 242, 0);
    ellipse(xPos-396, yPos-57, 10, 10);
    ellipse(aPos, bPos, 10, 10);
    ellipse(xPos, yPos, 10, 10);
    
    //all moving the stars
    xPos+=5;
    yPos+=3;
    
    aPos-=2;
    bPos+=5;
    
};
