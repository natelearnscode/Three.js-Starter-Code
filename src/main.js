import { World } from './World/World.js';

// create the main function
async function main() {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');

    // Create an instance of the World app
    const world = new World(container);

    // complete async tasks
    await world.init();

    // Start the animation loop
    world.start();
}

// call main to start the app
main().catch((err) => {
    console.error(err);
});