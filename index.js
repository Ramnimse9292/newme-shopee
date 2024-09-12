const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Newme Shopee!');
});

app.listen(port, () => {
    console.log(`Newme Shopee app listening at http://localhost:${port}`);
});
