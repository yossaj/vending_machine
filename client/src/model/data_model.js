const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')

const Data = function(){

}

Data.prototype.bindEvents = function(){

    PubSub.subscribe('VendingMachine: item', (evt)=>{
        
        this.getData(evt.detail)
    })
    
}

Data.prototype.getData = function(package){
    apiURL = package.url;
    const request = new RequestHelper(apiURL)
    request.get()
        .then((data) => {
            // console.log(data)
            package.data = data
            PubSub.publish('Data: Api data', package )
        })

}

module.exports = Data;