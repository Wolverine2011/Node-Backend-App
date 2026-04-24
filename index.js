const express = require('express');
const axios = require('axios');
const app = express();
const _ = require('lodash');

app.get('/', async (req, res) => {
    try {
        // Axios fetches data from a fake API
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        
        // Lodash just to capitalize some text (proves it's installed!)
        const message = _.capitalize('backend application is running successfully!');
        
        res.send(`
            <h1>${message}</h1>
            <p><strong>Data from Axios:</strong> ${response.data.title}</p>
        `);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});