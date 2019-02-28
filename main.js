/* 
bonjour

let xhr = new XMLHttpRequest;

xhr.open('GET', 'https://thatsthespir.it/api', true)

xhr.onload = function () {

    if (this.status === 200) {
        let objReceived = new Object;

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

xhr.send();
 */
////////////////////////////////////// The OLD WAY /////////////////////////////////////////////////////////
/* function request(callback) {
    let xhr = new XMLHttpRequest;

    xhr.onload = function () {
        if (this.status === 200) {
            callback(xhr.responseText);
        } else if (this.status === 403) {
            alert("ERROR!!!");
        } else if (this.status === 404) {
            alert("FORBIDDEN!!!");
        }
    }

    xhr.open('GET', 'https://thatsthespir.it/api', true)
    xhr.send();
}

function theData(data) {
    let objReceived = new Object;
    objReceived = JSON.parse(data)
    console.log(JSON.parse(data));
    document.querySelector("#author").innerHTML = "Author: " + objReceived.author;
    document.querySelector("#quote").innerHTML = objReceived.quote;
}

request(theData); */

/////////////////////////////////////// Avec le fetch ////////////////////////////////////////////////////////

fetch('https://thatsthespir.it/api')
    .then(res => res.json())//response type
    .then(data => {
        document.querySelector("#author").innerHTML = "Author: " + data.author;
        document.querySelector("#quote").innerHTML = data.quote;
    });