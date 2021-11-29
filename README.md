# action.pr-title-validation

#### This action checks that our PR titles meet our guidelines

The action needs Node.js to run but checking in your node_modules directory can cause problems. As an alternative, you can use a tool called @vercel/ncc to compile your code and modules into one file used for distribution, and you'll notice that our entry point is `dist/index.js` instead of just the root index file.

1. Install vercel/ncc by running this command in your terminal. `npm i -g @vercel/ncc`
1. Compile your `index.js` file using `ncc build index.js`. (If this were a public repo and we had a `licences.txt` file that command would be `ncc build index.js --license licenses.txt`)
   You'll see a new dist/index.js file with your code and the compiled modules. If you have a `licenses.txt` file you will also see an accompanying dist/licenses.txt file containing all the licenses of the node_modules you are using.

test
