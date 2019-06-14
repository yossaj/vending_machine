const PubSub = require("../helpers/pub_sub.js")

const CoinView = function(){

};    

CoinView.prototype.bindEvents = function(){
    const coin = document.querySelector(`.coin`);
    const empties = document.querySelectorAll('.empty');
    const coinSlot = document.querySelector('.coin-slot-holder')
    const counter = document.querySelector('.counter h1')
    const message = document.querySelector('#message')
    let score = 0

    coin.addEventListener('dragstart', dragStart);
    coin.addEventListener('dragend', dragEnd);

    coinSlot.addEventListener('dragover', dragOver)
    coinSlot.addEventListener('drop', dragDrop)

    function dragStart(transparent) {
        this.className += ' hold';
        setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd() {
        this.className = 'coin';
    }

    function dragOver(nothing) {
        nothing.preventDefault()
    }

    function dragDrop() {
 
        PubSub.publish('CoinView: coin details', { type: 'dollar', value: 100 })
    }
}



// CoinView.prototype.bindEvents = function () {
//     let coinListner = document.querySelector('#mainNav')
//     coinListner.addEventListener('mousedown', (evt) => {
//         let coin = evt.target.className
//         this.dragAndDropcCoin(coin)
//         coin = "";
//         // console.log(coin)
//     })
// }

// CoinView.prototype.dragAndDropcCoin = function (selectedcoin) {
//     console.log(selectedcoin);

//     const coin = document.querySelector(`.${selectedcoin}`);
//     const empties = document.querySelectorAll('.empty');
//     const coinSlot = document.querySelector('.coin-slot-holder')
//     const counter = document.querySelector('.counter h1')
//     const message = document.querySelector('#message')
//     let score = Number(counter.textContent)

//     coin.addEventListener('dragstart', dragStart);
//     coin.addEventListener('dragend', dragEnd);

//     coinSlot.addEventListener('dragover', dragOver)
//     coinSlot.addEventListener('drop', dragDrop)

//     function dragStart(transparent) {
//         this.className += ' hold';
//         setTimeout(() => (this.className = 'invisible'), 0);
//     }

//     function dragEnd() {
//         this.className = `${selectedcoin}`;
//     }

//     function dragOver(nothing) {
//         nothing.preventDefault()
//     }

//     function dragDrop() {
//         let droppedCoin = {};
//         if (selectedcoin == 'coin') {
//             droppedCoin = { type: 'dollar', value: 100 };
//         } else if (selectedcoin == 'coin2') {
//             droppedCoin = { type: 'half dollar', value: 50 };
//         }
//         score += droppedCoin.value
//         if (score >= 150) {
//             message.textContent = "Please select an item..."
//         }
//         // counter.textContent = score.toString()
//         PubSub.publish('CoinView: coin details', droppedCoin)
//     }
// }

module.exports = CoinView;