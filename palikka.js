// Palikka.js

import * as THREE from 'three';

class Palikka {
  constructor(scene, x, y, z, cellSize, color) {
    this.geometry = new THREE.BoxGeometry(cellSize, cellSize, cellSize);
    this.material = new THREE.MeshBasicMaterial({ color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.mesh.position.set(x * cellSize, y * cellSize, z * cellSize);

    this.addToScene(scene);

    this.speed = 0.1; // Lisää nopeusominaisuus palikalle
  }

  addToScene(scene) {
    scene.add(this.mesh);
  }

  removeFromScene(scene) {
    scene.remove(this.mesh);
  }

  move(direction) {
    switch (direction) {
      case 'forward':
        this.mesh.position.z -= this.speed; // Liiku eteenpäin
        break;
      case 'backward':
        this.mesh.position.z += this.speed; // Liiku taaksepäin
        break;
      case 'left':
        this.mesh.position.x -= this.speed;
        break;
      case 'right':
        this.mesh.position.x += this.speed;
        break;
      case 'up':
        this.mesh.position.y += this.speed;
        break;
      case 'down':
        this.mesh.position.y -= this.speed;
        break;
    }
  }
}

export default Palikka;
