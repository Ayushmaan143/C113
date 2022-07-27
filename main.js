function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 250, 150, 220, 200);

  fill("#ff0055");
  stroke("#6f00ff");
  circle(30, 30, 85);
  circle(570, 410, 85);
  circle(30, 410, 85);
  circle(570, 30, 85);
  fill("#008c00");
  stroke("#0384fc");
  rect(70, 20, 440, 20);
  rect(560, 70, 20, 280);
  rect(20, 70, 20, 280);
  rect(70, 400, 440, 20);
}

function take_snapshot(){    
  save('download.png');
}
