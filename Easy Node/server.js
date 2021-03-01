const http = require('http');
const fs = require('fs');

/* ********************
*** Create a server ***
******************** */
const server = http.createServer((request, response) => {
    console.log(request.url, request.method);

    // determine path selected by user
    let path = './html/';
    switch(request.url) {
        case '/': 
            path += 'index.html';
            response.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;

        // redirect page (in case page does not exist anymore)
        case '/about-me':
            response.statusCode = 301;
            response.setHeader('Location', '/about');
            response.end();
            break;  

        default:
            path += '404.html';
            response.statusCode = 404;
            break;
    }

    // set header content 
    response.setHeader('Content-Type', 'text/html');
    // read HTML files
    fs.readFile(path, (error, data) => {
        error 
            ? console.log(error)
            : response.write(data);

        response.end();
    });
});

const portNumber = 3000;

/* ********************
* Listen for requests *
******************** */
server.listen(portNumber, 'localhost', () => {
   
});