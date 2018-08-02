#! /usr/bin/env node

const pkg = require('../package.json');
const optionator = require('optionator');

//command

var program = require('commander');

program
  .command('rm <dir>')
  .option('-r, --recursive <cmd>', 'Remove recursively')
  .action(function (dir, cmd) {
    console.log('dir ' + dir + ' cmd ' + cmd);
  });

  program.parse(process.argv)

