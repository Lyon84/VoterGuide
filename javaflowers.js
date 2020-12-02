

background(255, 255, 255);
var points = 40;
var length = 80;
var mouseClicked = function() {
    stroke(mouseX/400*255, mouseY/400*255, (mouseX +         mouseY)/800*255);

    for (var i = 1; i<= points; i+=1 ) {
        var angle = 360/points * i;
        var x = length * cos(angle);
        var y = length * sin(angle);
        line(mouseX, mouseY, (mouseX - x), (mouseY - y));    
    }
};