#react-webpack


####Usage

NodeJS needs to be installed *first*, you can find it here: [nodejs](http://nodejs.org)

`$ npm install`

This will install
- react
 - jsx-loader
- webpack
 - webpack-dev-server
- style-loader
- css-loader

`$ npm start`

Start webpack in watch mode with progress and colors, "prettify's" the output, nice for large projects.

######OR

`$ npm run serve`

Start webpack development server. :heart:
This will start a small express server at port :8080 on your machine (localhost:8080) and serve your files with the compiled bundle.
webpack also watches your files and automatically refreshes the page in your browser when the bundle get recompiled.
webpack doesn't actually write the bundle to disk in this case, it's cached and served from memory.
Source urls are also added to your code so errors point to the right file. You should place your *index.html* in the bundle dir, or change the `--content-base` flag to where you have this file stored.

Go to: [http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server)
You can also view your app by going directly to http://localhost:8080.

