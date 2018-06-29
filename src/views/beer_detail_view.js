const BeerDetailView = function () {

};

BeerDetailView.prototype.createBeerDetail = function (beer) {
    const beerDetail = document.createElement('div');
    beerDetail.classList.add('beer-detail');

    const beerName = document.createElement('h2');
    beerName.textContent = beer.name;
    beerDetail.appendChild(beerName);
    return beerDetail;


    const detailsList = document.createElement('ul');
    console.log(detailList);
    const tagline = this.createDetailListItem('Tagline', beer.tagline);
    detailList.appendChild(tagline);

    beerDetail.appendChild(detailsList);
    return beerDetail;
};

BeerDetailView.prototype.createDetailListItem = function (label, property) {
    const element = document.createElement('li');
    element.textContent = `${label}: ${property}`;
    console.log(element);
    return element;


};

module.exports = BeerDetailView;
