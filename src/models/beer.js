const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Beer = function () {
    this.beerData = []
}

Beer.prototype.getData = function () {
    const request = new Request('https://api.punkapi.com/v2/beers');
    request.get((data) => {
        PubSub.publish('Beers:beerData-ready', data);
    })
};

module.exports = Beer;
