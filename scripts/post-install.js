'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const fs = require('fs');
const {Extract} = require('unzipper')

const stream = fs.createReadStream('./patches/react-datagrid.min.zip');
stream.on('error', function(err) { /* ignore incase patch not available*/ })
stream.pipe(Extract({ 
    path: './node_modules/flexicious-react-datagrid/dist' 
}));