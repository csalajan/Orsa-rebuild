# Nexient Championship Series

## Setup

### Dependencies

#### Global NPM Packages
node-gyp
karma
phantomjs

#### Project Dependencies
run `npm install`

## Gulp Tasks

### Build
`gulp build`
- compiles, concatenates, and minifies all JS files
- compiles and concatenates SASS files

### Test
`gulp test`

Runs all karma tests

### Deploy
`gulp deploy`

- Runs `build` tasks
- deploys to dev server
