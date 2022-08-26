hedwig = "Hedwig.mp3"
pp = "PP.mp3"
function preload() {
    hedwig = loadSound("Hedwig.mp3");
    pp = loadSound("PP.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);
}