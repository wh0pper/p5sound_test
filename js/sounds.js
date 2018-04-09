var song;
var amplitude;

function setup() {
  createCanvas(1200, 1000);
  song = loadSound('resonance.mp3', loaded);
  amplitude = new p5.Amplitude();
  frameRate(60);

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

  fill(255);
  stroke(255);
  ellipse(width/2,height/2,500*vol,500*vol);


  fill(0);
  ellipse(width/2,height/2,200*vol,200*vol);

  fill('rgba(0,0,0,0)');
  stroke(255, 0, 0);
  ellipse(width/2,height/2,100/vol,100/vol);
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
