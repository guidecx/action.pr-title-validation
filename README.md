# action.pr-title-validation

#### This action checks that our PR titles meet our guidelines

The action needs Node.js to run but checking in your node_modules directory can cause problems. As an alternative we use a tool called @vercel/ncc to compile our code and modules into one file used for distribution.
You'll notice that our entry point is `dist/index.js` instead of just the root index file so, when you make changes, just be sure to run `npm run build` so that the `dist/index.js` file is updated accordingly.
