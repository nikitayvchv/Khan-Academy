fill(0, 0, 0);
ellipse(200, 200, 375, 375);

var answer = floor(random(1, 5));

if (answer === 1) {
    fill(60, 0, 255);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("The answer is", 162, 211);  
    text("MAYBE", 179, 229); 
}
else if (answer ===2) {
    fill(204, 0, 0);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("The answer is", 162, 211);  
    text("NO", 192, 229); 
}
else if (answer ===3 ) {
    fill(123, 0, 217);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("The answer is", 162, 211);    
    text("Unclear.", 179, 229);
    text("Try asking again",158, 258);
 
}
else{
    fill(0, 194, 94);
    triangle(200, 104, 280, 280, 120, 280);
    fill(255, 255, 255);
    text("The answer is", 162, 211);   
    text("YES", 189, 231);
}
