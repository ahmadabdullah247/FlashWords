// require modules =============================================================================================
const express = require('express');
const path = require('path');
// initilize variables =========================================================================================
const app = express();
const port = process.env.PORT || 3000;

// app middleware configuration ================================================================================
app.use(express.static(__dirname + '/dist'));

// routes ======================================================================================================

app.use('/*', (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html')));

// start server ======================================================================================================
app.listen(port, () => console.log('Server is live on port : ', port));