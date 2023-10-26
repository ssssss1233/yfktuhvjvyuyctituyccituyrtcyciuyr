nosex=0;
nosey=0;
rrX=0;
lrX=0;
differance=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.center();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotposes);

}
function modelloaded() {
    console.log("posenet is initialized");

}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("NoseX= "+nosex+" NoseY= "+nosey);
        lrX=results[0].pose.leftWrist.x;
        rrX=results[0].pose.rightWrist.x;
        differance=floor(lrX-rrX);
        console.log("LeftWristX= "+lrX+" RightWristX= "+rrX+"diferance= "+differance);
    }
}
function draw() {
    background("#c7c1c1");
    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + differance +"px";
    fill("#89befa");
    stroke("#89beaa");
    square(nosex,nosey,differance);
    
}
