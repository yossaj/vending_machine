const VendingMachine = function () {
  this.itemCode = 0;
  this.items = []
  this.allCoins = [];
  this.currentCoins = [];
  this.balance = 0;
  this.vendingState = 'item select'
};

VendingMachine.prototype.bindEvents = function () {
  PubSub.subscribe('CoinView: coin details', (event) => {
    const coin = event.detail;
    this.insertCoin(coin);
  })

  PubSub.subscribe('InputView: Selected Item Code', (event) => {
    this.itemCode = event.detail;
  })
};

VendingMachine.prototype.insertCoin = function (coin) {
  this.addCoin(coin);
  this.addCoinValue(coin);
};

VendingMachine.prototype.vendItem = function (itemCode) {
  // functions will be added here as logic builds up
  while (!this.itemExists(itemCode)) {
    return 'item not found. please select another item'
    // input code again
  }

  if (this.itemExists(itemCode) && this.itemPriceMet(itemCode)) {
    return true

  } else {
    return 'insert correct amount'
  }
};

VendingMachine.prototype.addCoin = function (coin) {
  this.currentCoins.push(coin);
};

VendingMachine.prototype.addCoinValue = function (coin) {
  this.balance += coin.value;
};

VendingMachine.prototype.addCurrentCoinsToAllCoins = function () {
  this.allCoins += this.currentCoins
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

VendingMachine.prototype.itemPriceMet = function (itemCode) {
  itemPrice = this.itemPrice(itemCode)
  if (this.balance >= itemPrice) {
    return true;
  } else {
    return false;
  }
};
module.exports = VendingMachine;
