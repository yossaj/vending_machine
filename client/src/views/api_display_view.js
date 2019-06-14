const PubSub = require('../helpers/pub_sub.js')


const ApiDisplayView = function(){

}

ApiDisplayView.prototype.bindEvents = function(){
   

    PubSub.subscribe('Data: Api data', (evt)=>{
        const url = evt.detail.message
        // console.log(url);
    

        const enter = document.querySelector('#enter')
        enter.addEventListener('click', (evt)=>{
            this.render(url)
        })
    });
}

ApiDisplayView.prototype.render = function(url){

    PubSub.subscribe('VendingMachine: item', (evt) => {
        const display = document.querySelector('.vending-machine')
        display.style.display = 'none'
        const vended = document.querySelector('.vended-item')
        const apiImage = document.createElement('img')
        console.log(url);
        apiImage.src = url
        vended.append(apiImage)
        vended.style.display = 'inherit'
    })
   
   

}
    
    // display.classList.add('display-none')

    // const display = document.querySelector('#mainArticle')
    // const image = document.createElement('img')
    // image.src = url
    // display.append(image)





module.exports = ApiDisplayView;