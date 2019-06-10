const PubSub = require("../helpers/pub_sub.js")

const InputView = function(){

}

InputView.prototype.bindEvents = function(){

    const numGrid = document.querySelectorAll('.dialPad')

    for (button of numGrid) {
        button.addEventListener('click', (evt) => {
           PubSub.publish("InputView: Selected Item Value", (evt.target.innerHTML))
        })
    }
}


module.exports = InputView;