import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadBirds() {
    const loader = new GLTFLoader();

    const [parrotData, flamingoData, storkData] = await Promise.all([
        loader.loadAsync('/assets/models/Parrot.glb'),
        loader.loadAsync('/assets/models/Flamingo.glb'),
        loader.loadAsync('/assets/models/Stork.glb'),
    ]);

    const parrot = setupModel(parrotData);
    parrot.position.set(0, 0, 2.5);
    parrot.scale.set(0.05, 0.05, 0.05);
    
    const flamingo = setupModel(flamingoData);
    flamingo.position.set(7.5, 0, -10);
    flamingo.scale.set(0.05, 0.05, 0.05);
    
    const stork = setupModel(storkData);
    stork.position.set(0, -2.5, -10);
    stork.scale.set(0.05, 0.05, 0.05);

    return {
        parrot,
        flamingo,
        stork
    };
}

export { loadBirds };