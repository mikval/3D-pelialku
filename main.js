import { initScene } from './scene.js';
import { animate } from './anime.js';
import { initControls } from './controls.js';


const { scene, camera, renderer } = initScene();
const controls = initControls(camera, renderer);

animate(scene, null, camera, renderer, controls); // Lähetä null sijasta objektia
