// MODULES REQUIREMENTS
const request = require('request');
const zlib = require('zlib')
const fs = require('fs')

// SYSTEM CONSTANTS
const gzip = zlib.createGzip()

// Let's start by download a single page from gamespot

request('https://www.gamespot.com/reviews/?page=1')
  .on('error', err => {
    console.log(`Error: ${err}`)
  })
  .pipe(gzip)
  .pipe(fs.createWriteStream('data/page1.html.gz'))
