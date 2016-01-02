'use strict';

const fs = require('fs');

fs.readFile(
  'test/fixtures/template.ctn',
  'utf8',
  (err, data) => {
    if (err) throw err;

    console.log(data.split('\n'));
});