const assert = require('assert')

const crawler = require('../libs/crawler.js')

describe('Crawler', function() {

    describe('Page Requisition', function() {

        it('Request a page and be sucessfull on it (200-variant response code)', function(done) {
            this.timeout(5000);
            crawler.request_url('https://www.gamespot.com/reviews/?page=10', function(error, response, body) {
                if(!error) {
                    assert.equal(response.statusCode, 200)
                    done();
                } else {
                    done(err)
                }
            })
        })

    })

})
