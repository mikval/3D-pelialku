import { initScene } from './scene.js';
import { initCube } from './objekti.js';
import { animate } from './anime.js';
import { initControls } from './controls.js';


const { scene, camera, renderer } = initScene();
const cube = initCube(scene);
const controls = initControls(camera, renderer);

animate(scene, cube, camera, renderer);