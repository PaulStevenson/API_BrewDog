const PubSub = require('../helpers/pub_sub.js');
const BeerDetailView = require('./beer_detail_view.js');

const BeerListView = function (container) {
    this.container = container;
};

BeerListView.prototype.bindEvents = function () {
    PubSub.subscribe('Beers:beerData-ready', (event) => {
        this.renderBeerDetailView(event.detail);
    });
};

BeerListView.prototype.renderBeerDetailView = function (beers) {
    beers.forEach((beer) => {
        const beerItem = this.createBeerItem(beer);
        this.container.appendChild(beerItem);
    });
};

BeerListView.prototype.createBeerItem = function (beer) {
    const beerDetailView = new BeerDetailView();
    const beerDetail = beerDetailView.createBeerDetail(beer);
    return beerDetail;

};





module.exports = BeerListView;
