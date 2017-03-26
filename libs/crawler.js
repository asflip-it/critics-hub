"use strict"

// MODULES REQUIREMENTS
const request = require('request');
const zlib = require('zlib')
const fs = require('fs')

for(let i = 1; i <= 5; i++) {
  // create a new Gzip object for each page
  let gzip = zlib.createGzip()
  // Requesting a page and pipe the results for a gzip file
  request(`https://www.gamespot.com/reviews/?page=${i}`)
    .on('error', err => {
      console.log(`Error: ${err}`)
    })
    .pipe(gzip)
    .pipe(fs.createWriteStream(`data/page${i}.html.gz`))
}
