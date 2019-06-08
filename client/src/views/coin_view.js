const PubSub = require("../helpers/pub_sub.js")

const CoinView = function(){

};

CoinView.prototype.bindEvents = function(){
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');
    const vendingMachine = document.querySelector('.vending-machine')
    const counter = document.querySelector('.counter h1')
    let score = Number(counter.textContent)
  
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);


    vendingMachine.addEventListener('dragover', dragOver)
    vendingMachine.addEventListener('drop', dragDrop)

    function dragStart() {
        console.log(this)
        this.className += ' hold';
        setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd() {
        this.className = 'fill';
    }


    function dragOver(nothing) {
        nothing.preventDefault()
    }

    function dragDrop() {
        console.log(this)
        this.append(fill)
        score += 1
        counter.textContent = score.toString()

    }
}

module.exports = CoinView;