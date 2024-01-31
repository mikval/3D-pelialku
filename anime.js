export function animate(scene, cube, camera, renderer) {
    function animateFrame() {
        requestAnimationFrame(animateFrame);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animateFrame();
}