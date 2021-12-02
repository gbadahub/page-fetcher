
const request = require('request');
const fs = require('fs')



// HTTP request
request('http://example.edu', (error, response, body) => {


  fs.writeFile('/Users/georginabada/w2/d3/Page/index.html', body, err => {
    if (err) {
      console.error("error")
  
    }
    const {size} = fs.statSync('/Users/georginabada/w2/d3/Page/index.html');
    console.log(`Downloaded and saved ${size} bytes to ./index.html`)
  }) 
 
});

