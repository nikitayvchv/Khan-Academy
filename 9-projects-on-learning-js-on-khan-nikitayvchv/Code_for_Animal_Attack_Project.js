var bodyX = -72;
var bodyY = 238;
var bodySize = 86;
var eyeSize = bodySize/7.5;
var FishX = -34;
var FishY = 45;

var fishColour = 1;

draw = function() {

    background(70, 151, 189);
    fill(255, 226, 186);
    rect(-1,329,404,106);
    
//Fish1
    fill(mouseX, mouseY+10, mouseX+25);
    arc(bodyX-3/4*bodySize, bodyY, bodySize*8/10, bodySize/1.5, -103, 114); // face?
    ellipse(bodyX, bodyY, bodySize, bodySize/2); // body?
    fill(0, 0, 0);
    ellipse(bodyX+1/5*bodySize,bodyY-1/10*bodySize,eyeSize,eyeSize);
    bodyX++;

//Fish2
    fill(240, 209, 36);
    arc(FishX-3/4*bodySize, FishY, bodySize*8/10, bodySize/1.5, -103, 114); // face?
    ellipse(FishX, FishY, bodySize, bodySize/2); // body?
    fill(0, 0, 0);
    ellipse(FishX+1/5*bodySize,FishY-1/10*bodySize,eyeSize,eyeSize);
    FishX+=5;
    
};
