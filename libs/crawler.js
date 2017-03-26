"use strict"

const GamespotRequester = require('./requester.js').GamespotRequester

let gs_req = new GamespotRequester('gsr-head-1', {})

gs_req.get('https://www.gamespot.com/reviews/?page=10', '10')
