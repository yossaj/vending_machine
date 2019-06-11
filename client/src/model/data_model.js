const RequestHelper = require('../helpers/request_helper.js')

const Data = function(){

}

Data.prototype.bindEvents = function(){
 
    let apiURL = 'https://dog.ceo/api/breeds/image/random'
    this.getData(apiURL)
}

Data.prototype.getData = function(apiURL){
    const request = new RequestHelper(apiURL)
    request.get()
        .then((data) => {
            console.log(data)
        })

}

module.exports = Data;