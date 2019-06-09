const assert = require('assert');
const VendingMachine = require('../model/vending_machine.js');


describe('VendingMachine', function () {

  beforeEach(function () {
    coin1 = {type: 'nickel', value: 5};
    coin2 = {type: 'dime', value: 10};
    coin3 = {type: 'quarter', value: 25};
    coin4 = {type: 'half dollar', value: 50};
    coin5 = {type: 'dollar', value: 50};

    item1 = {code: 'a7', price: 75}
    item2 = {code: 'f3', price: 50}

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

  it('should be able to return current coins', function () {
    vendingMachine.insertCoin(coin1);
    vendingMachine.insertCoin(coin2);
    vendingMachine.insertCoin(coin3);
    const actual = vendingMachine.returnCoins();
    assert.deepStrictEqual(actual, [{type: 'nickel', value: 5}, {type: 'dime', value: 10}, {type: 'quarter', value: 25}])
  })

  it('should be empty of coins when coins have been returned', function () {
    vendingMachine.insertCoin(coin1);
    vendingMachine.insertCoin(coin2);
    vendingMachine.insertCoin(coin3);
    vendingMachine.returnCoins();
    const actual = vendingMachine.currentCoins
    assert.deepStrictEqual(actual, []);
  })

  it('should be able to check if an item exists __true', function () {
    vendingMachine.items.push(item1);
    const actual = vendingMachine.itemExists('a7');
    assert.deepStrictEqual(actual, true)
  })

  it('should be able to check if an item exists __false', function () {
    vendingMachine.items.push(item1);
    const actual = vendingMachine.itemExists('b2');
    assert.deepStrictEqual(actual, false)
  })

  it('should be able to return a messege informing the user that an item does not exist', function () {
    vendingMachine.items.push(item1);
    const actual = vendingMachine.vendItem('b3')
    assert.deepStrictEqual(actual, 'item not found. please select another item')
  })

  it('should be able to return an items value', function () {
    vendingMachine.items.push(item1);
    const actual = vendingMachine.itemPrice('a7');
    assert.deepStrictEqual(actual, 75)
  })

  it('should be able to tell if the item price has been met __true', function () {
    vendingMachine.items.push(item1);
    vendingMachine.insertCoin(coin4);
    vendingMachine.insertCoin(coin3);
    const actual = vendingMachine.itemPriceMet('a7')
    assert.deepStrictEqual(actual, true)
  })

  it('should be able to tell if the item price has been met __false', function () {
    vendingMachine.items.push(item1);
    vendingMachine.insertCoin(coin4);
    const actual = vendingMachine.itemPriceMet('a7')
    assert.deepStrictEqual(actual, false)
  })

  it('should be able to vend item if correct amount is inserted and item exists', function () {
    vendingMachine.items.push(item1);
    vendingMachine.insertCoin(coin4);
    vendingMachine.insertCoin(coin3);
    const actual = vendingMachine.vendItem('a7')
    assert.deepStrictEqual(actual, true)
  })
  //
  // it('should add current coins to all coins if vend is successful', function () {
  //
  // })
  //
  // it('should return appropriate change if change is needed', function () {
  //
  // })
  //
  // it('should be able to return a message if item amount is not met while trying to vend', function () {
  //
  // })
});
