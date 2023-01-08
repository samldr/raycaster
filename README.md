A ray caster in JS, team 1010 Richards Stairwell submission for HackED 2023.


## Inspiration

We have been wanting to build a ray tracer/ray caster for a while, and we thought that this would be a good time to attempt it. It was also relevant to some of the courses I took last semester, so we were excited to try and use those concepts.

## What it does

The ray caster simulates light rays from a light source as they interact with items on the canvas. As of right now, we've added:

- Flat mirrors
- Rectangular glass items (with a different refractive index)


## How we built it

We were initially going to use MATLAB to try and go for that award, but we decided to use JavaScript with Node instead because we were more familiar with it as a team, it was easier for OOP, and we would be able to integrate it with React. 

We started by structuring the program and writing the classes we would need. The first item we added was the mirror. We wrote a collision detection function to detect when the ray intersects with the mirror, and then a reflection function to determine the new reflected ray segment.

Up until now, we had been outputting a couple rays at a time and then drawing them on graph paper based on their endpoints to make sure everything had reflected properly. We decided to create a React app to hold the JS code, then use the HTML canvas to plot the rays and items.

Then, we added a light source item, so we could control the initial position, angle, quantity, and direction of the rays, instead of the static source we were using up to this point.

## Challenges we ran into

We came up with the idea for the ray caster at the start of the hackathon, so we didn't really plan anything beforehand. So, the first few hours were pretty slow as we organized our project. We also ran into some minor setbacks with Git and Node, but we were able to fix them without being held up for too long.

The biggest problem we ran into was collision detection, it was relatively simple when it came to the mirror, but when we tried to port it over to the 2-dimensional glass box we ran into a lot of trouble. It took us a while to get it to detect the interface and implement Snell's Law, but on our first attempt the rays would start to bend before entering the glass box. We found another edge case when we placed the light source inside the glass, as the ray didn't register as being inside the box, and so the rays wouldn't behave with the right refractive index.

We also could've budgeted our time better; by 4am things were moving pretty slow.

## Accomplishments that we're proud of


## What we learned


## What's next for raycaster - 1010 Richards Stairwell

If we haven't finished it by the end of the hackathon, we want to polish it up and make a nice looking React app out of the project. Hopefully, then we'll be able to make it interactive, so the user can click and place items on the canvas instead of refreshing Node each time we change the parameters.

We would also like to add more items, like spherical mirrors, parabolic mirrors, and lenses. Adding them wouldn't be that difficult considering we already have done a lot of the work with flat mirrors and glass.

Another feature that we were planning to add before we ran out of time was colour, so we could simulate chromatic and spherical aberration. 

Further than that, we were thinking of remaking it in another language like C++ to make the project run more accurately and more efficiently than it does in JavaScript. Doing this would also allow us to plan everything from the beginning, which would allow us to avoid certain edge cases.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
