var bodySize = 150;


draw = function() {

    background(255, 255, 255);
    fill(199, 86, 107);
    textSize(40);
    text("STUFFED FISH!", 58, 36);
    fill(162, 0, 255);
    textSize(16);
    text("VERY SOFT AND FISHY! A MUST HAVE!!!", 55, 59);
    text("ONLY HERE", 151, 382);
    fill(0, 43, 255);
    textSize(50);
    text("BUY NOW!!!" , 67, 356);
    
    
    noStroke();
    fill(255, 213, 0);
    ellipse(mouseX,mouseY,bodySize,bodySize);
    arc(mouseX-88,mouseY+50,bodySize/2,bodySize/2,-112,81);
    fill(0, 0, 0);
    stroke(0, 0, 0);
    line(mouseX+20,mouseY-10,mouseX,mouseY);
    noStroke();
    ellipse(mouseX+33, mouseY-37, bodySize/7, bodySize/7);
    ellipse(mouseX+-24, mouseY-27, bodySize/7, bodySize/7);
    
    
 
};
