var Floor = function (x, y, z, width, depth, heading) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.width = width;
  this.depth = depth;

  this.geometry = new THREE.BoxGeometry(this.width, 0.1, this.depth);
  this.material = new THREE.MeshLambertMaterial({
    color: 0xEFEFEF
  });

  this.obj = new THREE.Mesh(this.geometry, this.material);

  this.obj.position.x = this.x;
  this.obj.position.y = this.y;
  this.obj.position.z = this.z;

  this.obj.rotateX(heading);
};

Floor.UP = 180 * (Math.PI /180);
Floor.DOWN = 0 * (Math.PI /180);