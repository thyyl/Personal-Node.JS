const { response } = require('express');
const express = require('express');
const { request } = require('http');

const app = express();

/* ********************
*** Set View Engine ***
******************** */

app.set('view engine', 'ejs');

/* ********************
* Listen for requests *
******************** */
const portNumber = 3000;
app.listen(portNumber);

/* ********************
*** Get the requests **
******************** */
app.get('/', (request, response) => {
    response.render('index');
});

app.get('/about', (request, response) => {
    response.render('about');
});

// redirect page
app.get('/about-us', (request, response) => {
    response.redirect('/about');
});

// 404 page
app.use((request, response) => {
    response.status(404).render('404');
})
