const PubSub = require("../helpers/pub_sub.js")

const InputView = function(){

}

InputView.prototype.bindEvents = function(){

    const firstNum = document.querySelector('#first-num')
    const secondNum = document.querySelector('#second-num')
    const thirdNum = document.querySelector('#third-num')
    const enterButton = document.querySelector('#enter')
    const numGrid = document.querySelectorAll('.dialPad')
    const message = document.querySelector('#message')
    const counter = document.querySelector('.counter h1')
    console.log(counter)
    let code = ""
    PubSub.subscribe( 'VendingMachine: balance', (evt)=>{
        console.log(evt.detail)
        counter.textContent = evt.detail
    })

    for (button of numGrid) {
        button.addEventListener('click', (evt) => {
            let selectString = evt.target.innerHTML
                if(firstNum.textContent == 0){
                firstNum.textContent = selectString;
                code += selectString
            }else if(secondNum.textContent == 0){
                secondNum.textContent = selectString
                code += selectString
            }else if(thirdNum.textContent == 0){
                thirdNum.textContent = selectString
                code += selectString
            }else{
                firstNum.textContent = 0
                secondNum.textContent = 0
                thirdNum.textContent = 0
                code = ""
            }
        })

        enterButton.addEventListener('click', (evt)=>{
            if(code.length == 3){
            // message.textContent = "Please Wait..."
            PubSub.publish("InputView: Selected Item Code", (code))
            }


        })


    }
}

module.exports = InputView;
