function drop_check(drop) {
  if (drop.position.y < 0) {
    drop.position.y =  Math.floor(Math.random() * (20 - 1)) + 1;
  }
}

function create_drops(num) {
  var dropGeo = new THREE.CylinderGeometry(.1, .1, 5);
  var dropMat = new THREE.MeshLambertMaterial( {color: 0xa0c4ff} );
  for(var i = 0; i < num; i++) {
    var drop = new THREE.Mesh( dropGeo, dropMat );
    var posX = Math.floor(Math.random() * (10 - 1)) + 1;
    var posZ = Math.floor(Math.random() * (10 - 1)) + 1;
    var posY = 20
    drop.position.x = posX;
    drop.position.z = posZ;
    drop.position.y = posY;
    drops.add(drop);
  }
}


var renderer = new THREE.WebGLRenderer();

// Create a scene which will hold all our meshes to be rendered
var scene = new THREE.Scene();

// Create and position a camera
var camera = new THREE.PerspectiveCamera(
  60,                                   // Field of view
  window.innerWidth/window.innerHeight, // Aspect ratio
  0.1,                                  // Near clipping pane
  1000                                  // Far clipping pane
);

// Reposition the camera
camera.position.set(5,5,0);

// Point the camera at a given coordinate
camera.lookAt(new THREE.Vector3(0,0,0));

// Create a renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });

// Size should be the same as the window
renderer.setSize( window.innerWidth, window.innerHeight );

// Set a near white clear color (default is black)
renderer.setClearColor( 0xfff6e6 );

// Append to the document
document.body.appendChild( renderer.domElement );

var drops = new THREE.Group();

create_drops(100);

scene.add(drops);

// Render the scene/camera combination
renderer.render(scene, camera);

// Add an orbit control which allows us to move around the scene. See the three.js example for more details
// // https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', function() { renderer.render(scene, camera); } ); // add this only if there is no animation loop (requestAnimationFrame

//scene animate
function animate() {
  requestAnimationFrame( animate );

  drops.children.forEach(function(drop) {
    drop.position.y -= 2;
    drop_check(drop)
    console.log(drop.position.y)
  })
  renderer.render (scene, camera);
}
animate();
