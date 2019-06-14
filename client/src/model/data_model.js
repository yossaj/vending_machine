const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Data = function(){

}

Data.prototype.bindEvents = function(){
 
    let apiURL = 'https://dog.ceo/api/breeds/image/random'
    let selectcode = '222'
    this.getData(apiURL, selectcode)
}

Data.prototype.getData = function(apiURL, selectcode){
    const request = new RequestHelper(apiURL)
    request.get()
        .then((data) => {
            PubSub.publish('Data: Api data', data )
            console.log(data)
        })

}

module.exports = Data;