export function animate(scene, cube, camera, renderer, controls) {
    function animateFrame() {
        requestAnimationFrame(animateFrame);
        renderer.render(scene, camera);
        controls.update();
    }

    animateFrame();
}