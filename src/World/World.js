import { loadBirds } from './components/birds/birds.js';
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let controls;
let renderer;
let scene;
let loop;

class World {
    // Create an instance of the World app
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);
        controls = createControls(camera, renderer.domElement);
        
        const { ambientLight, mainLight } = createLights();

        loop.updatable.push(controls);

        scene.add(ambientLight, mainLight);

        const resizer = new Resizer(container, camera, renderer);
    }

    // Run async tasks
    async init() {
        const { parrot, flamingo, stork } = await loadBirds();

        controls.target.copy(parrot.position);

        loop.updatable.push(parrot, flamingo, stork);

        scene.add(parrot, flamingo, stork);
    }
  
    // Render the scene
    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
    }
      
    stop() {
        loop.stop();
    }
}
  
export { World };