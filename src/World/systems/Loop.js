import { Clock } from 'https://cdn.skypack.dev/three';

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
      this.camera = camera;
      this.scene = scene;
      this.renderer = renderer;
      this.updatable = [];
    }
  
    start() {
        this.renderer.setAnimationLoop(() => {
            // tell every animated object to tick forward one frame
            this.tick();

            // render a frame
            this.renderer.render(this.scene, this.camera);
        });
    }
  
    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        // only call the getDelta function once per frame!
        const delta = clock.getDelta();


        for (const object of this.updatable) {
            object.tick(delta);
        }
    }
}
  
  export { Loop }