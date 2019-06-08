const assert = require('assert');
const VendingMachine = require('../model/vending_machine.js');

describe('VendingMachine', function () {
  it('should be able to store a coin', function () {
    const vendingMachine = new VendingMachine ();
    coin = {type: 'dime', value: 10}
    vendingMachine.insertCoin(coin)
    assert.deepStrictEqual(vendingMachine.currentCoins,[{type: 'dime', value: 10}])
  })
});
