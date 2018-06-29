const Beer = require('./models/beer.js');
const BeerListView = require('./views/beer_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log('JS loaded');
    const listContainter = document.querySelector('#beer-list');
    const beerListView = new BeerListView(listContainter);
    beerListView.bindEvents();

    const beer = new Beer;
    beer.getData();

});
