//Localhost:8080 -> index.html
//about -> about.html
//contact-me ->contact-me.html
//Any other URL -> 404.html

const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-me.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', "404.html"));
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});