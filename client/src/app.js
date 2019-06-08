const CoinView = require("./views/coin_view.js")

document.addEventListener('DOMContentLoaded', () => {
    console.log('javascript loaded');

    const coinView = new CoinView();
    coinView.bindEvents();

});