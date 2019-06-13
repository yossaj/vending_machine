const CoinView = require("./views/coin_view.js")
const InputView = require("./views/input_view.js")
const Data = require("./model/data_model.js")

document.addEventListener('DOMContentLoaded', () => {
    console.log('javascript loaded');

    const coinView = new CoinView();
    coinView.bindEvents();

    const inputView = new InputView();
    inputView.bindEvents();

    const data = new Data();
    data.bindEvents();
});