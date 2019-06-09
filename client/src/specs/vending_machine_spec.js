const assert = require('assert');
const VendingMachine = require('../model/vending_machine.js');


describe('VendingMachine', function () {

  beforeEach(function () {
    coin1 = {type: 'nickel', value: 5};
    coin2 = {type: 'dime', value: 10};
    coin3 = {type: 'quarter', value: 25};
    coin4 = {type: 'half dollar', value: 50};
    coin5 = {type: 'dollar', value: 50};

    vendingMachine = new VendingMachine ();

  })

  it('should be able to store a coin', function () {
    vendingMachine.insertCoin(coin1)
    const actual = vendingMachine.currentCoins;
    assert.deepStrictEqual(actual,[{type: 'nickel', value: 5}])
  })

  it('should be able to add coin value to current balance', function () {
    vendingMachine.insertCoin(coin1)
    const actual = vendingMachine.balance;
    assert.deepStrictEqual(actual, 5)
  })
  //
  // it('should be able to return current coins', function () {
  //   vendingMachine.insertCoin(coin1);
  //   vendingMachine.insertCoin(coin2);
  //   vendingMachine.insertCoin(coin3);
  //   assert.deepStrictEqual(vendingMachine.returnCoins, [{type: 'nickel', value: 5}, {type: 'dime', value: 10}, {type: 'quarter', value: 25}])
  // })
});
