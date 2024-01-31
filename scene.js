// näytöllä näkyvät asiat määritelään täällä

import * as THREE from 'three';

export function initScene() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // solumatriisi
    const gridSize = 10;
    const cellSize = 1;
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.1, transparent: true });

        //solumatriisin luonti ja visualisointi kolmiulotteisessa tilassa THREE.BoxGeometry-objekteilla
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            for (let z = 0; z < gridSize; z++) {
                const geometry = new THREE.BoxGeometry(cellSize, cellSize, cellSize);
                const cube = new THREE.Mesh(geometry, cubeMaterial);
                cube.position.set(x * cellSize, y * cellSize, z * cellSize);
                scene.add(cube);
            }
        }
    }

    camera.position.z = 20;
    camera.position.y = 20;
    camera.position.x = 20;

    return { scene, camera, renderer };
}