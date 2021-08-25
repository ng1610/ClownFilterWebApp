noseX=0;
noseY=0;

function preload(){
    clown_nose= loadImage("snipped clown nose.png");
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);

    fill("red");
    stroke("red");
    image(clown_nose, noseX-10, noseY-10, 30, 30);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if (results.length >0){
        console.log(results);
        console.log("nose x position- " + results[0].pose.nose.x);
        console.log("nose y position- " + results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
function take_snap(){
    save('filterImage.png')
}