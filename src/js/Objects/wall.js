var Wall = function (x, y, z, width, height, heading) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.width = width;
  this.height = height;
  this.heading = heading;

  this.geometry = new THREE.BoxGeometry(this.width, this.height, 0.1);
  this.material = new THREE.MeshLambertMaterial({
    color: 0xEFEFEF
  });

  this.obj = new THREE.Mesh(this.geometry, this.material);

  this.obj.position.x = this.x;
  this.obj.position.y = this.y;
  this.obj.position.z = this.z;

  this.obj.rotateY(this.heading);
};

Wall.NORTH = 180 * (Math.PI /180);
Wall.SOUTH = 0 * (Math.PI /180);
Wall.EAST = 90 * (Math.PI /180);
Wall.WEST = -90 * (Math.PI /180);