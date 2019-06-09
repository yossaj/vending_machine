const assert = require('assert');
const VendingMachine = require('../model/vending_machine.js');

describe('VendingMachine', function () {
  describe('VendingMachine', function () {

    beforeEach(function () {
      const coin1 = {type: 'nickel', value: 5};
      const coin2 = {type: 'dime', value: 10};
      const coin3 = {type: 'quarter', value: 25};
      const coin4 = {type: 'half dollar', value: 50};
      const coin5 = {type: 'dollar', value: 50};

      const vendingMachine = new VendingMachine ();

    })

    it('should be able to store a coin', function () {
      vendingMachine.insertCoin(coin1)
      assert.deepStrictEqual(vendingMachine.currentCoins,[{type: 'nickel', value: 5}])
    })

    it('should be able to add coin value to current balance', function () {
      vendingMachine.insertCoin(coin1)
      assert.deepStrictEqual(vendingMachine.balance, 5)
    })

    it('should be able to return current coins', function () {
      vendingMachine.insertCoin(coin1);
      vendingMachine.insertCoin(coin2);
      vendingMachine.insertCoin(coin3);
      assert.deepStrictEqual(vendingMachine.returnCoins, [{type: 'nickel', value: 5}, {type: 'dime', value: 10}, {type: 'quarter', value: 25}])
    })
  });

});
