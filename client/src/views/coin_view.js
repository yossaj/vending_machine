const PubSub = require("../helpers/pub_sub.js")

const CoinView = function(){

};

CoinView.prototype.bindEvents = function(){
    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');
    const coinSlot = document.querySelector('.coin-slot')
    const counter = document.querySelector('.counter h1')
    let score = Number(counter.textContent)
  
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);

    coinSlot.addEventListener('dragover', dragOver)
    coinSlot.addEventListener('drop', dragDrop)

    function dragStart(transparent) {
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
        score += 1
        counter.textContent = score.toString()
    }
}

module.exports = CoinView;