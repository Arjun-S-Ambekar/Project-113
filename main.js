function preload(){}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.position(110, 250);
    arjun = createCapture(VIDEO);
    arjun.hide();
}

function draw(){
    image(arjun, 100, 100   , 600, 400);
    stroke(3, 252, 107);
    fill(3, 252, 107);
    circle(60, 200, 4)
    circle(160, 200, 4)
    circle(60, 300, 4)
    circle(160, 300, 4)
}

function take_snapshot(){
    save('my_selfie_image.pdf')
}