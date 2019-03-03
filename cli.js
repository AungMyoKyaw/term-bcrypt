#!/usr/bin/env node

const meow = require('meow');
const { render, h } = require('ink');
const TermBcrypt = require('./ui.js');

const cli = meow(
  `
	Usage
	  $ bcrypt 

  Options
    --text
    --salt-rounds
    --help

	Examples
	  $ bcrypt
	  $ bcrypt --text='myplaintext'
	  $ bcrypt --salt-rounds='10'
	  $ bcrypt --help
`,
  {
    flags: {
      'salt-rounds': {
        type: 'string',
        default: '10'
      },
      text: {
        type: 'string',
        default: ''
      }
    }
  }
);

const { saltRounds, text } = cli.flags;

render(h(TermBcrypt, { saltRounds: +saltRounds, text }));
