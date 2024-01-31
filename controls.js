import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export function initControls(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    return controls;
}

function setupControls(palikka) {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp':
          palikka.move('forward');
          break;
        case 'ArrowDown':
          palikka.move('backward');
          break;
        case 'ArrowLeft':
          palikka.move('left');
          break;
        case 'ArrowRight':
          palikka.move('right');
          break;
        case ' ':
          palikka.move('up');
          break;
        case 'Control':
          palikka.move('down');
          break;
      }
    });
  }
  
  export { setupControls };