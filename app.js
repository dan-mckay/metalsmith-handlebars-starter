var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var colors = require('colors');

var outputFolder = './build';

Metalsmith(__dirname)
  .use(markdown())
  .destination(outputFolder)
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
