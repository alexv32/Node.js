const internals= require('./internals');


function makeRequest(url,data){
    internals.send(url,data);
    return internals.read();
}

const responseData = makeRequest('https://google.com','hello');
console.log(responseData);