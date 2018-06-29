const PubSub = require('../helpers/pub_sub.js');

const BeerListView = function (container) {
    this.container = container;
};

// BeerListView.prototype.bindEvents = function () {
//     PubSub.subscribe('Beers:beerData-ready', (event) => {
//         this.renderBeerDetailView(event.detail);
//         console.log(event);
//     });
// };

module.exports = BeerListView;
