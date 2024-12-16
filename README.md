# web-core

core page for CNZ website

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Getting Started with UC Crypto Soc Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies required to build the website

### `npm run dev`

Can only be run after npm install
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
Suggest running this before deploying to make sure you build compiles without eslint errors

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

As per most react apps, the App.jsx file dictates the run order.
The containers directory contains the configuration of each page
Each page has a jsx and css component, for ease of modification

## CICD

This website is able to use two potential types of CICD, push from main, and release packaging (during early development, push to main is used, since its faster than creating a release)

### github-pages.yml

This is the push from main config.
When a change is pushed to main,github actions will package the changes with npm build, and push the build files to gh-pages branch. there is currently no validation

### npm-publish-github-packages.yml

This flow allows for more controlled releases, to release, push to main, and create a release on github.
When creating a release, create a new tag and detail what is contained in the release, this will the create a build and publish. Note, if you want to use this flow, you will need to update the pages section.
