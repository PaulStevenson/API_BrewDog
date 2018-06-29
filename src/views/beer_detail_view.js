const BeerDetailView = function () {

};

BeerDetailView.prototype.createBeerDetail = function (beer) {
    const beerDetail = document.createElement('div');
    beerDetail.classList.add('beer-detail');

    const beerName = document.createElement('h2');
    beerName.textContent = beer.name;
    beerDetail.appendChild(beerName);


    const detailsList = document.createElement('ul');
    const tagline = this.createDetailListItem('Tagline', beer.tagline);
    detailsList.appendChild(tagline);

    const description = this.createDetailListItem('Description', beer.description);
    detailsList.appendChild(description);


    beerDetail.appendChild(detailsList);
    return beerDetail;
};

BeerDetailView.prototype.createDetailListItem = function (label, property) {
    const element = document.createElement('li');
    element.textContent = `${label}: ${property}`;
    return element;
};

module.exports = BeerDetailView;
