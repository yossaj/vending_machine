const VendingMachine = function () {
  this.allCoins = [];
  this.currentCoins = [];
  this.balance = 0;
};

VendingMachine.prototype.insertCoin = function (coin) {
  this.addCoin(coin);
  this.addCoinValue(coin)
};

VendingMachine.prototype.addCoin = function (coin) {
  this.currentCoins.push(coin);
};

VendingMachine.prototype.addCoinValue = function (coin) {
  this.balance += coin.value
};

module.exports = VendingMachine;
