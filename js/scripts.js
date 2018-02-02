
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

//A mesh is created from the geometry and material, then added to the scene
// var plane = new THREE.Mesh(
// new THREE.PlaneGeometry( 5, 5, 5, 5 ),
// new THREE.MeshBasicMaterial( { color: 0x393839, wireframe: true } )
// );
// plane.rotateX(Math.PI/2);
// scene.add( plane );

//add cube to scene
// var boxGeo = new THREE.BoxGeometry( 1, 1, 1);
// var boxMat = new THREE.MeshBasicMaterial ( { color: 0xff69b4 } );
// var box = new THREE.Mesh( boxGeo, boxMat );
// scene.add( box );

//add bones
// var root = new THREE.Bone();
// var child = new THREE.Bone();

// root.add( child );
// child.position.y = 5;


  var drops = new THREE.Object3D();

  var dropGeo = new THREE.CylinderGeometry(.1, .1, 10);
  var dropMat = new THREE.MeshLambertMaterial( {color: 0xa0c4ff} );

  for(var i = 0; i < 10; i++) {
    var drop = new THREE.Mesh( dropGeo, dropMat );
    var posX = Math.floor(Math.random() * (10 - 1)) + 1;
    var posZ = Math.floor(Math.random() * (10 - 1)) + 1;

    drop.position.x = posX;
    drop.position.z = posZ;
    drop.position.y = 0;
    drops.add(drop);
    scene.add(drop);

}



  // Render the scene/camera combination
  renderer.render(scene, camera);

  // Add an orbit control which allows us to move around the scene. See the three.js example for more details
  // // https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.
  var controls = new THREE.OrbitControls( camera, renderer.domElement );
  controls.addEventListener( 'change', function() { renderer.render(scene, camera); } ); // add this only if there is no animation loop (requestAnimationFrame


  //scene animate
  function animate() {

    requestAnimationFrame( animate );
    drops.position.y += 0.01;
    // drops.position.y += 1;
  // scene.rotation.x += 0.01;
    // scene.rotation.y += 0.01;

    renderer.render (scene, camera);
  }

  animate();
