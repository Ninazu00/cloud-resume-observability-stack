const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const appName = process.env.APP_NAME
app.use('/images', express.static(path.join(__dirname, '../frontend/images')));
app.use('/css', express.static(path.join(__dirname, '../frontend/css')));
app.use('/js', express.static(path.join(__dirname, '../frontend/js')));
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
    console.log(`Request served by ${appName}`);
});
app.listen(port, () => {
    console.log(`${appName} is listening on port ${port}`);
});