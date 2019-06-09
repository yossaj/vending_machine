const assert = require('assert');
const VendingMachine = require('../model/vending_machine.js');

describe('VendingMachine', function () {
  describe('VendingMachine', function () {

    beforeEach(function () {
      const coin1 = {type: 'nickel', value: 5};
      const coin2 = {type: 'dime', value: 10};
      const coin3 = {type: 'quarter', value: 25}
      const coin4 = {type: 'half dollar', value: 50}
      const coin5 = {type: 'dollar', value: 50}

      const vendingMachine = new VendingMachine ();

    })

    it('should be able to store a coin', function () {
      vendingMachine.insertCoin(coin1)
      assert.deepStrictEqual(vendingMachine.currentCoins,[{type: 'dime', value: 10}])
    })

    it('should be able to add the coins value to current balance', function () {
      
    })

  });

});
