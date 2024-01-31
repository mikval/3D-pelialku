import { initScene } from './scene.js';
import { initCube } from './objekti.js';
import { animate } from './anime.js';

const { scene, camera, renderer } = initScene();
const cube = initCube(scene);

animate(scene, cube, camera, renderer);