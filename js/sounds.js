var song;
var amplitude;

function setup() {
  createCanvas(800, 800);
  song = loadSound('resonance.mp3', loaded);
  amplitude = new p5.Amplitude();
  frameRate(60);
  stroke(255);
}

function loaded() {
  console.log("loaded");
  song.play();
}

function draw() {
  background(0);
  var vol = amplitude.getLevel();
  // line(0,vol*height,width, vol*height);
  // console.log(vol);
  ellipse(width/2,height/2,500*vol,500*vol);
  // beginShape();
  // volHistory.push(vol);
  // for (var i = 0; i < volHistory.length; i++) {
  //   var yCoord = map(volHistory[i], 0, 1, height, 0);
  //   point(i, yCoord);
  // }
  // // endShape();
  // console.log(volHistory);
}

function mousePressed() {
  if ( song.isPlaying() ) {
    song.pause();
  } else {
    song.play();
  }
}
