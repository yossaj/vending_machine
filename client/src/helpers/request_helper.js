const RequestHelper = function (url) {
    this.url = url;
};

RequestHelper.prototype.get = function () {
    return fetch(this.url)
        .then(response => response.json())
        .catch((err) => { console.log('Doh! An Error.', err) })
};

module.exports = RequestHelper;