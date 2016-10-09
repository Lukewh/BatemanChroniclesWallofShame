(function () {

  THREE.ImageUtils.crossOrigin = '';

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var clock = new THREE.Clock();

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  /*var geometry = new THREE.BoxGeometry(1,1,1);
  var material = new THREE.MeshLambertMaterial( { color: 0xefefef } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );*/

  var walls = [
    new Wall(0, 0, 20, 15, 20, Wall.NORTH),
    new Wall(-7.5, 0, 0, 40, 20, Wall.EAST),
    new Wall(0, 0, -20, 15, 20, Wall.SOUTH),
    new Wall(7.5, 0, 0, 40, 20, Wall.WEST)
  ];

  for (var i = 0, ii = walls.length; i < ii; i += 1) {
    scene.add(walls[i].obj);
  }

  var floor = new Floor(0, -10, 0, 15, 40, Floor.UP);
  scene.add(floor.obj);

  var ceiling = new Floor(0, 10, 0, 15, 40, Floor.DOWN);
  scene.add(ceiling.obj);

  var images = [
    new Picture('http://localhost:8888/BatemanChroniclesWallofShame/src/proxy.php?image=http://i.imgur.com/QVpfOzu.png', -5, -4, walls[2]),
    new Picture('http://localhost:8888/BatemanChroniclesWallofShame/src/proxy.php?image=http://i.imgur.com/QVpfOzu.png', 0, -4, walls[2]),
    new Picture('http://localhost:8888/BatemanChroniclesWallofShame/src/proxy.php?image=http://i.imgur.com/QVpfOzu.png', 5, -4, walls[2])
  ];

  for (i = 0, ii = images.length; i < ii; i += 1) {
    scene.add(images[i].obj);
  }

  //var ambientLight = new THREE.AmbientLight(0xbbbbbb);
  //scene.add(ambientLight);

  var pointLight = new THREE.PointLight(0xFFFFFF);
  scene.add(pointLight);

  pointLight.position.x = 0;
  pointLight.position.y = 2;
  pointLight.position.z = 0;

  camera.position.z = 19;
  camera.position.y = -5

  controls = new THREE.FirstPersonControls(camera);
  controls.movementSpeed = 10;
  controls.lookSpeed = 0.075;
  controls.lookVertical = false;
  controls.noFly = true;

  function render() {
    var delta = clock.getDelta(), speed = delta * (10 * 5);

    controls.update(delta);
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }

  window.onload = function () {
    render();
  };
})();