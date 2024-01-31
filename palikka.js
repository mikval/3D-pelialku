import * as THREE from 'three';

class Palikka {
  constructor(scene, x, y, z, cellSize, color) {
    this.geometry = new THREE.BoxGeometry(cellSize, cellSize, cellSize);
    this.material = new THREE.MeshBasicMaterial({ color });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.mesh.position.set(x * cellSize, y * cellSize, z * cellSize);

    this.addToScene(scene);
  }

  addToScene(scene) {
    scene.add(this.mesh);
  }

  removeFromScene(scene) {
    scene.remove(this.mesh);
  }
}

export default Palikka;
