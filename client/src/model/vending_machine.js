const VendingMachine = function () {
  this.items = []
  this.allCoins = [];
  this.currentCoins = [];
  this.balance = 0;
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

VendingMachine.prototype.returnCoins = function () {
  const coins = this.currentCoins;
  this.currentCoins = [];
  return coins;
};

VendingMachine.prototype.itemExists = function (inputCode) {
  for (const item of this.items) {
    if (item.code === inputCode) {
      return true
    }
  }
  return false
};

module.exports = VendingMachine;
