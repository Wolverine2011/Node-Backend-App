const express = require('express');
const axios = require('axios');
const _ = require('lodash');
const app = express();

// This line is the secret: it looks for a number after 'node index.js'
// If no number is given, it defaults to 3000
const PORT = process.argv[2] || 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        const message = _.capitalize('backend application is running successfully!');
        
        res.send(`
            <h1>${message}</h1>
            <p><strong>Server Port:</strong> ${PORT}</p> 
            <p><strong>Data from Axios:</strong> ${response.data.title}</p>
            <p><em>Refresh to see the port change (Load Balancing in action!)</em></p>
        `);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});