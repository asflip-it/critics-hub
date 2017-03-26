"use strict"

// REQUIRED MODULES
const request = require('request');
const zlib = require('zlib')
const fs = require('fs')

class BaseRequester {

  constructor(id, options) {
    this.id = id || '';
    this.options = options || {};
  }

  get(url) {
    throw new Error('Must be implemented on the super class')
  }

}

class GamespotRequester extends BaseRequester {

  constructor(id, options) {
    super(id, options)
  }

  get(url, id) {
    let gzip = zlib.createGzip()
    request(url)
      .on('error', err => {
        console.log(`Error: ${err}`)
      })
      .pipe(gzip)
      .pipe(fs.createWriteStream(`data/page${id}.html.gz`))
  }

}

exports.BaseRequester = BaseRequester;
exports.GamespotRequester = GamespotRequester;
