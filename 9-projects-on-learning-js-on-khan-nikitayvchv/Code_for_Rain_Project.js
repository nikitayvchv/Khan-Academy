var xPositions = [0];
var yPositions = [0];

var star = getImage("cute/Star");

draw = function() {
    background(8, 41, 77);
    
    textSize(40);
    text("CLICK THE SCREEN", 7, 38);

    for (var i = 0; i < xPositions.length; i++) {
        image(star, xPositions[i], yPositions[i], 50, 80);
        yPositions[i] += 5;
        
        if (yPositions[i] > 400){
            yPositions[i] = 0;
        }
    }
    
    mouseClicked = function(){
        xPositions.push(mouseX);
        yPositions.push(0);
    };
};
