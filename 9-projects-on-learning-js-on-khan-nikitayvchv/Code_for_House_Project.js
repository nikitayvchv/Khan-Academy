var grass = getImage("cute/GrassBlock");
var tree = getImage("cute/TreeUgly");

var x;
var y;

background(219, 255, 255);
for (var a = 8; a < 30; a++){
    fill(181, 107, 70);
    rect(61,a*19,279,20);
}

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(120, 80, 19);
rect(180, 280, 40, 77);

for (var i = 0; i < 5; i++){
    if (i ===0){
        image(tree, i*30, 237);
    }
    else if (i === 1){
        image(tree, i*307, 237);
    }
    
    image(grass, i*101, 307);
}

for (var x = 1; x < 5; x++){
    fill(155, 202, 204);
    for (var y = 3; y < 5; y++){
        rect(x*73,y*52,35,45);
    }
}
