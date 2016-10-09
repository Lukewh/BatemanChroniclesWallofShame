var Picture = function (url, x, y, wall) {
  // http://i.imgur.com/QVpfOzu.png
  this.material = new THREE.MeshLambertMaterial({
    map: THREE.ImageUtils.loadTexture(url),
    color: 0xffffff
  });

  this.obj = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 0.2), this.material);

  this.obj.position.x = wall.x + x;
  this.obj.position.y = wall.y + y;
  this.obj.position.z = wall.z;

  this.obj.overdraw = true;

  this.obj = this.obj.rotateY(wall.heading + (180 * (Math.PI / 180)));
};
