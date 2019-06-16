const PubSub = require('../helpers/pub_sub.js')


const ApiDisplayView = function(){

}

ApiDisplayView.prototype.bindEvents = function(){
    PubSub.subscribe('Data: Api data', (evt)=>{
        this.render(evt.detail )
    });
}

ApiDisplayView.prototype.render = function(package){
    const display = document.querySelector('.vending-machine')
    const vended = document.querySelector('.vended-item')
    let code = package.code

    if (code == 223) {
    let url = package.data.message
        this.renderDog(url, vended, display)
    } else if (code == 777) {
        this.textRender(package.data.phrase, vended, display)
    }
    else if (code == 555) {
        this.renderSwanson(package.data[0], vended, display)
    }else if(code == 999){
        this.textRender(package.data.slip.advice, vended, display)
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

ApiDisplayView.prototype.renderDog = function(url, vended, display){
        this.preRender(vended, display)
        const apiImage = document.createElement('img')
        console.log(url);
        apiImage.src = url
        vended.append(apiImage) 
        apiImage.addEventListener
        this.close(apiImage, vended, display)     
}

ApiDisplayView.prototype.renderSwanson = function(quote, vended, display){
    this.preRender(vended, display)
    const iconSwanson = document.createElement('img')
    iconSwanson.src = "http://pixeljoint.com/files/icons/img_0004.png"
    const wordSwanson = document.createElement('h2')
    wordSwanson.textContent = quote
    vended.append(iconSwanson);
    vended.append(wordSwanson);
    setTimeout(()=> this.postRender(vended,display),5000)
} 

ApiDisplayView.prototype.close = function(apiAsset, vended, display){
    apiAsset.addEventListener('dblclick', (evnt)=>{
        this.postRender(vended, display)
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