const express = require('express');
const app = express();

app.use(express.static('public'));

// route to home page
app.get('/home', (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});
// route to about page
app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`);
});
// route to works page
app.get('/works', (request, response) => {
    response.sendFile(`${__dirname}/views/works.html`);
});
// route to gallery page
app.get('/gallery', (request, response) => {
    response.sendFile(`${__dirname}/views/gallery.html`);
});
// listen port 5001
app.listen(5001, () => {
    console.log('server running');
});