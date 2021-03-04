const express = require('express');

const server = express();

const PORT = 5000;

server.get('/', (req,res) => {
    res.json({hello: "world"})
});

server.get('/home', (req, res) => {
    res.json({hello: "We Here"});
});
server.listen(5000, () => {
    console.log(`\n*** Server Running on http://localhost:${PORT}`)
})