const PubSub = require('../helpers/pub_sub.js')


const ApiDisplayView = function(){

}

ApiDisplayView.prototype.bindEvents = function(){
    PubSub.subscribe('Data: Api data', (evt)=>{
        this.render(evt.detail )
        console.log(evt.detail)
    });
}

ApiDisplayView.prototype.render = function(package){
    const display = document.querySelector('.vending-machine')
    const vended = document.querySelector('.vended-item')
    const displayMessage = document.querySelector('.display h1')

    let code = package.code

    if (code == 223) {
        let message = "Dog CEO Api"
        let url = package.data.message
        this.renderPic(url, vended, display, displayMessage, message )
    } else if (code == 777) {
        displayMessage.textContent = "Corprate Bullshit Generator API"
        this.textRender(package.data.phrase, vended, display)
    }
    else if (code == 555) {
        this.renderSwanson(package.data[0], vended, display, displayMessage)
    }else if(code == 666){
        let message = "Cat API"
        this.renderPic(package.data[0].url, vended, display, displayMessage, message)
    }else if(code == 999){
        displayMessage.textContent = "Daily Advice"
        this.textRender(package.data.slip.advice, vended, display, displayMessage)
    }
}

ApiDisplayView.prototype.preRender = function (vended, display) {
    display.style.display = 'none'
    vended.innerHTML = ""
    vended.style.display = 'inherit'
}

ApiDisplayView.prototype.postRender = function(vended,display){
    display.style.display = 'grid'
    vended.innerHTML = ""
    vended.style.display = 'none'
}

ApiDisplayView.prototype.renderPic = function (url, vended, display, displayMessage, message){
        this.preRender(vended, display)
        const apiImage = document.createElement('img')
        apiImage.src = url
        vended.append(apiImage) 
        displayMessage.textContent = message
        apiImage.addEventListener
        this.close(apiImage, vended, display, displayMessage)     
}

ApiDisplayView.prototype.renderSwanson = function(quote, vended, display, displayMessage){
    this.preRender(vended, display)
    const iconSwanson = document.createElement('img')
    iconSwanson.src = "http://pixeljoint.com/files/icons/img_0004.png"
    displayMessage.textContent = "Ron Swanson Quotes"
    const wordSwanson = document.createElement('h2')
    wordSwanson.textContent = quote
    vended.append(iconSwanson);
    vended.append(wordSwanson);
    setTimeout(()=> this.postRender(vended,display),5000)
} 

ApiDisplayView.prototype.close = function(apiAsset, vended, display, displayMessage){
    apiAsset.addEventListener('dblclick', (evnt)=>{
        this.postRender(vended, display)
        displayMessage.textContent = "Choose Another"
    })
}


ApiDisplayView.prototype.textRender = function(phrase, vended, display){
    this.preRender(vended, display)
    const displayPhrase = document.createElement('h2')
    displayPhrase.textContent = phrase
    vended.append(displayPhrase);
    setTimeout(() => this.postRender(vended, display), 8000)
}

module.exports = ApiDisplayView;