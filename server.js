const express = require('express')
const ImageKit = require("imagekit");
const fs = require('fs')
const app = express();

var imagekit = new ImageKit({
    publicKey: "public_je/X0Dlpa7ZPF77hoMM2wk6eYB0=",
    privateKey: "private_CmNnILwe8LWxxz4vglIfVpxxF5E=",
    urlEndpoint: "https://ik.imagekit.io/imrzn"
});

app.get('/signature', (req, res) => {
    const { token, signature, expire } = imagekit.getAuthenticationParameters(); // Retrieve authentication parameters
    res.json({ token, signature, expire }); // Send the parameters as JSON
});

app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream('index.html').pipe(res);
});

app.listen(3000, () => {
    console.log("Sample backend app listening at http://localhost:3000");
})
