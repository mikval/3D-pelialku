import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function initControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    return controls;
}
