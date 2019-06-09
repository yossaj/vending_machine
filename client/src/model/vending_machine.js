const VendingMachine = function () {
  this.allCoins = [];
  this.currentCoins = [];
  this.balance = 0;
};

VendingMachine.prototype.insertCoin = function (coin) {
  this.addCoin(coin);
};

VendingMachine.prototype.addCoin = function (coin) {
  this.currentCoins.push(coin);
};

module.exports = VendingMachine;
