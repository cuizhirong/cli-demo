#! /usr/bin/env node

const program = require('commander');

program
  .version('0.0.1')
  .option('-f, --foo', 'enable some foo')
  .option('-b, --bar', 'enable some bar');

program.on('--help', function() {
  console.log('custom-help --help');
});

program.parse(process.argv);
console.log('stuff')