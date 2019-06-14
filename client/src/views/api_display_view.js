const PubSub = require('../helpers/pub_sub.js')


const ApiDisplayView = function(){

}

ApiDisplayView.prototype.bindEvents = function(){
 

    PubSub.subscribe('Data: Api data', (evt)=>{
        const url = evt
        console.log(url);
        

        const display = document.querySelector('.vending-machine')
        display.addEventListener('click', (evt)=>{
            
            this.render(url)
        })
    });
}

ApiDisplayView.prototype.render = function(details){
    console.log(details)

}


module.exports = ApiDisplayView;