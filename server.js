#!/usr/bin/env node

// Here is where we load Raneto.
// When you are in your own project repository,
// Raneto should be installed via NPM and loaded as:
const raneto = require('raneto');

// Then, we load our configuration file
// This can be done inline, with a JSON file,
// or with a Node.js module as we do below.
const config = require('./config/config.js');

// Finally, we initialize Raneto
// with our configuration object
const app = raneto(config);

// Load the HTTP Server
const server = app.listen(app.get('port'), app.get('host'), function () {
  console.log('HTTP server listening on http://' + server.address().address + ':'+server.address().port);
});
