var song;
var amplitude;
// var volHistory = [];

function setup() {
  createCanvas(900, 500);

  // button = createButton("play");
  // button.mousePressed(togglePlay)
  song = loadSound('resonance.mp3', loaded);
  amplitude = new p5.Amplitude();
  frameRate(60);
  stroke(255);
}

function loaded() {
  console.log("loaded");
  song.play();
}

// function togglePlay() {
//   if ( song.isPlaying() ) {
//     button.html("play");
//     song.pause();
//   } else {
//     button.html("pause");
//     song.play();
//   }
// }

function draw() {
  // line
    background(0);
  var vol = amplitude.getLevel();
  // line(0,vol*height,width, vol*height);
  console.log(vol);
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
    // button.html("play");
    song.pause();
  } else {
    // button.html("pause");
    song.play();
  }
}
