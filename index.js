var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var colors = require('colors');

var outputFolder = './build';

Metalsmith(__dirname)
  .source('./src')
  .destination(outputFolder)
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    directory: 'templates'
  }))
  .build(buildCallback);

function buildCallback(err) {
  var msg;
  if(err) {
    msg = '...There was a build error: ' + err;
    console.log(msg .red);
  }
  msg = '...Your build was succesful - check the ' + outputFolder + ' directory';
  console.log(msg .green);
}
