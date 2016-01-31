# Nexient Championship Series

## Setup

### Dependencies

#### Global Dependencies
- [Virtual Box](https://www.virtualbox.org/)
- [Vagrant](https://www.vagrantup.com/)

#### Global NPM Packages
- node-gyp
- karma
- phantomjs
- gulp

`npm install -g node-gyp karma phantomjs gulp`

#### Dev Environment
- Install Virtual Box
- Install Vagrant

Navigate to directory.

Install Dependencies

`npm install`

Build Project

`gulp build`

Launch VM

`vagrant up`

## Gulp Tasks

### Build
`gulp build`
- compiles, concatenates, and minifies all JS files
- compiles and concatenates SASS files

### Test
`gulp test`

Runs all karma tests