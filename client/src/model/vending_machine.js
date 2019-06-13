const PubSub = require('../helpers/pub_sub.js');

const VendingMachine = function (items) {
  this.items = items;
  this.allCoins = [];
  this.currentCoins = [];
  this.balance = 0;
  this.vendingState = 'item select'
};

VendingMachine.prototype.bindEvents = function () {
  PubSub.subscribe('CoinView: coin details', (event) => {
    const coin = event.detail;
    this.insertCoin(coin);
    PubSub.publish('CoinView: balance', this.balance);
  })

  PubSub.subscribe('InputView: Selected Item Code', (event) => {
    const itemCode = event.detail;
    this.vendItem(itemCode);
  })
};

VendingMachine.prototype.vendItem = function (itemCode) {
  while (!this.itemExists(itemCode)) {
    const itemNotFoundMessage = 'item not found. please select another item'
    return itemNotFoundMessage;
    PubSub.publish('VendingMachine:display message', itemNotFoundMessage)
  }

  if (this.itemExists(itemCode) && this.itemPriceMet(itemCode)) {
    this.addCurrentCoinsToAllCoins();
    this.clearCurrentCoins();
    this.clearBalance();

    const itemUrl = this.getItem(itemCode).url;
    return itemUrl;
    PubSub.publish('VendingMachine: itemUrl', itemUrl);
    PubSub.publish('VendingMachine: balance', this.balance);
  } else {
    const insertCorrectAmountMessage = 'insert correct amount'
    PubSub.publish('VendingMachine:display message', insertCorrectAmountMessage)

  }
};

VendingMachine.prototype.insertCoin = function (coin) {
  this.addCoin(coin);
  this.addCoinValue(coin);
};

VendingMachine.prototype.addCoin = function (coin) {
  this.currentCoins.push(coin);
};

VendingMachine.prototype.addCoinValue = function (coin) {
  this.balance += coin.value;
};

VendingMachine.prototype.addCurrentCoinsToAllCoins = function () {
  this.allCoins = this.allCoins.concat(this.currentCoins);
};

VendingMachine.prototype.clearCurrentCoins = function () {
  this.currentCoins = [];
};

VendingMachine.prototype.clearBalance = function () {
  this.balance = 0;
};

VendingMachine.prototype.returnCoins = function () {
  const coins = this.currentCoins;
  this.currentCoins = [];
  return coins;
};

VendingMachine.prototype.itemExists = function (itemCode) {
  for (const item of this.items) {
    if (item.code === itemCode) {
      return true
    }
  }
  return false
};

VendingMachine.prototype.itemPrice = function (itemCode) {
  for (const item of this.items) {
    if (item.code === itemCode) {
      return item.price
    }
  }
};

VendingMachine.prototype.getItem = function (itemCode) {
  for (const item of this.items) {
    if (item.code === itemCode) {
      return item;
    }
  }
};

VendingMachine.prototype.itemPriceMet = function (itemCode) {
  itemPrice = this.itemPrice(itemCode)
  return (this.balance >= itemPrice)
};

module.exports = VendingMachine;
