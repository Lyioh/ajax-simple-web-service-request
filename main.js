/* ////////////////////////// Fetch --- Promise /////////////////////////////
    fetch('https://thatsthespir.it/api')
    .then(res => res.json())//response type
    .then(data => console.log(data)); //log the data; */

let objReceived = new Object;

//Create the XHR Object
let xhr = new XMLHttpRequest;
//Call the open function, GET-type of request, url, true-asynchronous
xhr.open('GET', 'https://thatsthespir.it/api', true)
//call the onload 
xhr.onload = function () {
    //check if the status is 200(means everything is okay)
    if (this.status === 200) {
        //return server response as an object with JSON.parse
        console.log(JSON.parse(this.responseText));
        objReceived = JSON.parse(this.responseText)
        document.querySelector("#author").innerHTML = "Author: " + objReceived.author;
        document.querySelector("#quote").innerHTML = objReceived.quote;
    } else if (this.status === 403) {
        alert("ERROR!!!");
    } else if (this.status === 404) {
        alert("FORBIDDEN!!!");
    }
}
//call send
console.log(xhr.response)
xhr.send();
    //Common Types of HTTP Statuses
    // 200: OK
    // 404: ERROR
    // 403: FORBIDDEN

   
