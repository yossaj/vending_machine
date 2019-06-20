const CoinView = require("./views/coin_view.js")
const InputView = require("./views/input_view.js")
const Data = require("./model/data_model.js")
const VendingMachine = require('./model/vending_machine.js')
const ApiDisplayView = require("./views/api_display_view.js")

document.addEventListener('DOMContentLoaded', () => {
    console.log('javascript loaded');

    const coinView = new CoinView();
    coinView.bindEvents();

    const inputView = new InputView();
    inputView.bindEvents();

    const data = new Data();
    data.bindEvents();

    const apiDisplayView = new ApiDisplayView();
    apiDisplayView.bindEvents();

    items = [
      {code: '223', price: 75, url:'https://dog.ceo/api/breeds/image/random'},
      { code: '666', price: 50, url:'https://api.thecatapi.com/v1/images/search?size=full'},
      { code: '555', price: 50, url:`https://ron-swanson-quotes.herokuapp.com/v2/quotes`},
      { code: '999', price: 50, url:`https://api.adviceslip.com/advice`},
      { code: '777', price: 50, url:`https://corporatebs-generator.sameerkumar.website/`}
      
    ]
    const vendingMachine = new VendingMachine(items)
    vendingMachine.bindEvents();
});
