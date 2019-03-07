// code away!
const express = require('express');

const endPoints = require('./endpoints/endPoints.js');

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.send('API up and running')
});

server.use('/api', endPoints);

const PORT = 9000;

server.listen(PORT, () => console.log(`Server running on port:${PORT}`));