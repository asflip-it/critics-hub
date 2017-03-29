const assert = require('assert')

const crawler = require('../libs/crawler.js')

describe('Crawler', function() {

    describe('Page Requisition', function() {

        it('Request a page and be sucessfull on it (200-variant response code)', function(done) {
            this.timeout(5000);
            crawler.request_url('https://www.gamespot.com/reviews/?page=10', function(_, response, _) {
                assert.equal(response.statusCode, 200);
                done();
            })
        })

        it('Throws an Error when URL is invalid', function() {
            assert.throws(function() {
                crawler.request_url('htt://www.gamespot.com/reviews/?page=10')
            }, Error)
            assert.doesNotThrow(function() {
                crawler.request_url('https://www.gamespot.com/reviews/?page=10')
            }, Error)
        })

    })

})
