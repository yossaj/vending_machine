const PubSub = require("../helpers/pub_sub.js")

const InputView = function(){

}

InputView.prototype.bindEvents = function(){

    const firstNum = document.querySelector('#first-num')
    const secondNum = document.querySelector('#second-num')
    const thirdNum = document.querySelector('#third-num')

    const numGrid = document.querySelectorAll('.dialPad')
    for (button of numGrid) {
        button.addEventListener('click', (evt) => {
            let selectString = evt.target.innerHTML

            if(firstNum.textContent == 0){
            firstNum.textContent = selectString;
        }else if(secondNum.textContent == 0){
            secondNum.textContent = selectString
        }else if(thirdNum.textContent == 0){
            thirdNum.textContent = selectString
        }else{
            firstNum.textContent = 0
            secondNum.textContent = 0
            thirdNum.textContent = 0
        }
            console.log(firstNum);
            
        //    PubSub.publish("InputView: Selected Item Value", (selectValue))
        })
    }
}


module.exports = InputView;