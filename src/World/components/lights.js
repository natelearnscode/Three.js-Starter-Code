import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
} from 'https://cdn.skypack.dev/three';

function createLights() {
  const ambientLight = new HemisphereLight(
    'white', // bright sky color
    'darkslategrey', // dim ground color
    3, // intensity
  );
  
  // Create a directional light
  const mainLight = new DirectionalLight('white', 2);

  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };