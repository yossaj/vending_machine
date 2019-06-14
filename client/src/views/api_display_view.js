const PubSub = require('../helpers/pub_sub.js')


const ApiDisplayView = function(){

}

ApiDisplayView.prototype.bindEvents = function(){
   

    PubSub.subscribe('Data: Api data', (evt)=>{
        let package = evt.detail 
        let code = package.code
        console.log(package)
        // let url = package.data.message
        // console.log(url);
        if(code == 222){
            let url = package.data.message
            this.renderDog(url)
        }else if(code == 555){
            this.renderSwanson(package.data[0])
            
        }
        

     
    });
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

ApiDisplayView.prototype.renderDog = function(url){
        const display = document.querySelector('.vending-machine')
        const vended = document.querySelector('.vended-item')
        this.preRender(vended, display)
        const apiImage = document.createElement('img')
        console.log(url);
        apiImage.src = url
        vended.append(apiImage)      
}

ApiDisplayView.prototype.renderSwanson = function(quote){
    const display = document.querySelector('.vending-machine')
    const vended = document.querySelector('.vended-item')
    this.preRender(vended, display)
    const iconSwanson = document.createElement('img')
    iconSwanson.src = "http://pixeljoint.com/files/icons/img_0004.png"
    const wordSwanson = document.createElement('h2')
    wordSwanson.textContent = quote
    vended.append(iconSwanson);
    vended.append(wordSwanson);
    setTimeout(()=> this.postRender(vended,display),5000)
} 
    

    // display.classList.add('display-none')

    // const display = document.querySelector('#mainArticle')
    // const image = document.createElement('img')
    // image.src = url
    // display.append(image)





module.exports = ApiDisplayView;