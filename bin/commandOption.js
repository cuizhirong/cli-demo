#! /usr/bin/env node

const program = require('commander');
var colors = require('colors');

function range(val) {
  console.log(val.split('..').map(Number));
}

function collect(val, memo) {
  console.log(val);
  console.log(memo);
}

program
  .version('0.0.1')
  .option('-p, --pepprs', 'Add peppers', function() { console.log('-p, --pepprs callback'); })
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c | --control-thing [value]', 'Add ct', collect, [])
  .option('-r, --range <a>..<b>', 'A range', range)
  .parse(process.argv);

program.outputHelp(make_red);

function make_red(txt) {
  return colors.red(txt); //display the help text in red on the console
}