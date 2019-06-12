const PubSub = require("../helpers/pub_sub.js")

const CoinView = function(){

};    

CoinView.prototype.bindEvents = function(){
    let coinListner = document.querySelector('#mainNav')
    coinListner.addEventListener('mousedown', (evt)=>{
        // console.log(evt.target.className);
        let coin = evt.target.className
        this.dragAndDropcCoin(coin)
    })

   
    
}

CoinView.prototype.dragAndDropcCoin = function(selectedcoin){
    console.log(selectedcoin);
    
    const coin = document.querySelector(`.${selectedcoin}`);
    const empties = document.querySelectorAll('.empty');
    const coinSlot = document.querySelector('.coin-slot')
    const counter = document.querySelector('.counter h1')
    let score = Number(counter.textContent)

    coin.addEventListener('dragstart', dragStart);
    coin.addEventListener('dragend', dragEnd);

    coinSlot.addEventListener('dragover', dragOver)
    coinSlot.addEventListener('drop', dragDrop)

    function dragStart(transparent) {
        this.className += ' hold';
        setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd() {
        this.className = `${selectedcoin}`;
    }

    function dragOver(nothing) {
        nothing.preventDefault()
    }

    function dragDrop() {
        if(selectedcoin == 'coin'){
            console.log("Dollar")
        }else if(selectedcoin == 'coin2'){
            console.log('nickle');
            
        }
        score += 1
        counter.textContent = score.toString()
    }
};

module.exports = CoinView;