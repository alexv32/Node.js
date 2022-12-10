const internals= require('./internals');
//const {send}=require('./request.js');
//const {read}=require('./internals/response.js');

function makeRequest(url,data){
    internals.request.send(url,data);
    return internals.response.read();
}

const responseData = makeRequest('https://google.com','hello');
console.log(responseData);