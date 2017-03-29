"use strict"

const request = require('request');

function request_url(url, callback) {
    request(url, callback)
}

exports.request_url = request_url;
