const assert = require('assert');
const VendingMachine = require('../model/vending_machine.js');
const PubSub = require('../helpers/pub_sub.js')

describe('VendingMachine', function () {

  beforeEach(function () {
    coin1 = {type: 'nickel', value: 5};
    coin2 = {type: 'dime', value: 10};
    coin3 = {type: 'quarter', value: 25};
    coin4 = {type: 'half dollar', value: 50};
    coin5 = {type: 'dollar', value: 50};

    items = [
      {code: '222', price: 75, url:'https://dog.ceo/api/breeds/image/random'},
      {code: '666', price: 50, url:'https://www.hail-satan.com/'}
    ]

    vendingMachine = new VendingMachine (items);

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
    const actual = vendingMachine.itemExists('222');
    assert.deepStrictEqual(actual, true)
  })

  it('should be able to check if an item exists __false', function () {
    const actual = vendingMachine.itemExists('b2');
    assert.deepStrictEqual(actual, false)
  })

  it('should be able to return a messege informing the user that an item does not exist', function () {
    const actual = vendingMachine.vendItem('b3')
    assert.deepStrictEqual(actual, 'item not found. please select another item')
  })

  it('should be able to return an items value', function () {
    const actual = vendingMachine.itemPrice('222');
    assert.deepStrictEqual(actual, 75)
  })

  it('should be able to tell if the item price has been met __true', function () {
    vendingMachine.insertCoin(coin4);
    vendingMachine.insertCoin(coin3);
    const actual = vendingMachine.itemPriceMet('222')
    assert.deepStrictEqual(actual, true)
  })

  it('should be able to tell if the item price has been met __false', function () {
    vendingMachine.insertCoin(coin4);
    const actual = vendingMachine.itemPriceMet('222')
    assert.deepStrictEqual(actual, false)
  })

  it('should be able to vend url if correct amount is inserted and item exists', function () {
    vendingMachine.insertCoin(coin4);
    vendingMachine.insertCoin(coin3);
    const actual = vendingMachine.vendItem('222')
    assert.deepStrictEqual(actual, 'https://dog.ceo/api/breeds/image/random')
  })

  it('should add current coins to all coins if vend is successful', function () {
    vendingMachine.insertCoin(coin1);
    vendingMachine.insertCoin(coin2);
    vendingMachine.addCurrentCoinsToAllCoins();
    const actual = vendingMachine.allCoins;
    assert.deepStrictEqual(actual, [{type: 'nickel', value: 5}, {type: 'dime', value: 10}]);
  })

  it('can clear currentCoins', function () {
    vendingMachine.insertCoin(coin1);
    vendingMachine.insertCoin(coin2);
    vendingMachine.clearCurrentCoins();
    const actual = vendingMachine.currentCoins;
    assert.deepStrictEqual(actual, [])
  })

  it('can clear balance', function (){
    vendingMachine.insertCoin(coin1);
    vendingMachine.insertCoin(coin2);
    vendingMachine.clearBalance();
    const actual = vendingMachine.balance;
    assert.deepStrictEqual(actual, 0)
  })
  //
  // it('should return appropriate change if change is needed', function () {
  //
  // })
  //
  // it('should be able to return a message if item amount is not met while trying to vend', function () {
  //
  // })
});
