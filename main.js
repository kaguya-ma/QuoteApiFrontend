function callAPI() {
    fetch('http://localhost:3000/quotes/data.json')
        .then(function(resp) { return resp.json()})
        .then(function(data) {
            drawQuote(data)
        })
}

function drawQuote(data) {
    let index = Math.floor(Math.random() * data.quotes.length)
    document.querySelector('#quotes').innerHTML=`"${data.quotes[index]}"`
}