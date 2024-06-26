const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const gmtTime = new Date().toISOString();
    res.send(`Inderjeet Singh - WEB322 ${gmtTime}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
