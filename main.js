// main.js


import Palikka from './palikka.js';
import { initScene } from './scene.js';
import { animate } from './anime.js';
import { initControls } from './controls.js';

// Määrittele cellSize tässä
const cellSize = 1;

const { scene, camera, renderer } = initScene();
const controls = initControls(camera, renderer);

const palikka = new Palikka(scene, 5, 5, 5, cellSize, 0x990099);

animate(scene, null, camera, renderer, controls);
