const CoinView = require("./views/coin_view.js")
const InputView = require("./views/input_view.js")
const Data = require("./model/data_model.js")
const VendingMachine = require('./model/vending_machine.js')

document.addEventListener('DOMContentLoaded', () => {
    console.log('javascript loaded');

    const coinView = new CoinView();
    coinView.bindEvents();

    const inputView = new InputView();
    inputView.bindEvents();

    const data = new Data();
    data.bindEvents();

    items = [
      {code: '222', price: 75, url:'https://dog.ceo/api/breeds/image/random'},
      {code: '666', price: 50, url:'https://www.hail-satan.com/'}
    ]

    const vendingMachine = new VendingMachine(items)
    vendingMachine.bindEvents();
});
