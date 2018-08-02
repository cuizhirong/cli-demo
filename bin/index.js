#!/usr/bin/env node
var optionator = require('optionator')({
  prepend: 'Usage: cmd [options]',
  append: 'Version 1.0.1',
  options: [{
    option: 'help',
    alias: 'h',
    type: 'Boolean',
    description: 'displays help'
  }, {
    option: 'count',
    alias: 'c',
    type: 'Int',
    description: 'number of things',
    longDescription: 'text longDescription',
    example: 'cmd --count 2'
  }]
});
const options = optionator.parseArgv(process.argv);

if (options.count) {
  console.log(optionator.generateHelpForOption('count'));
}

if (options.help) {
  console.log(optionator.generateHelp());
}
