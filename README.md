The program simulates thousands of rays of light as they travel through a scene and interact with their environment through absorption, reflection, and refraction. The resulting image is a physically accurate representation of light travelling through the 2-dimensional scene. Originally our submission for HackED 2023.

## Instructions

1. run `npm start` to start the app
2. edit and save `src/optics/settings.json` to customize the scene
3. to add more items (mirrors, walls) to the scene, edit `src/optics/scene.js`
4. run `node src/optics/driver.js` to recast the rays

## TODO

- Check if rays have left the bounding box and stop simulating them if this has happened
- Distance from line checking can probably be more efficient
- remove signed distance function
- have less expensive light source
- bounding set of diagonal parallel lines instead of box
- have ray line intersection in external module