background(89, 216, 255);

//Draws the fish
var drawFish = function(centerX, centerY, bodyLength, bodyHeight, colourVar, colourVar2, colourVar3){
    var bodyColor = color(colourVar, colourVar2, colourVar3);
    var tailColor = color(colourVar3, colourVar2, colourVar);
    
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    fill(tailColor);
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

// draws the pebbles
var drawPebbles = function(pebbleX,pebbleY){
    stroke(0, 0, 0);
    fill(61, 61, 61);
    ellipse(pebbleX,pebbleY,40,15);
};

// will draw fish when you click
mouseClicked = function(){
    var randomVar = random(30, 150);
    var randomVar2 = random(20, 100);
    var colourVar = random(20,255);
    var colourVar2 = random(20,255);
    var colourVar3 = random(20,255);
    drawFish(mouseX, mouseY, randomVar, randomVar2, colourVar, colourVar2, colourVar3);
};

/* will constantly make pebbles (funny enough, you can burry the fish in the pebbles
due to this feature, so if you dislike fish, i guess you can do that...)*/
draw = function() {
    drawPebbles(random(0,392) ,random(321,404));
};
