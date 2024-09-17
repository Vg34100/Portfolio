const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes by serving the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Paths to your SSL certificate files
const sslOptions = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('fullchain.pem')
};

// Start the HTTPS server
const HTTPS_PORT = process.env.HTTPS_PORT || 443;
https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
  console.log(`HTTPS Server is running on port ${HTTPS_PORT}`);
});

// Optionally, redirect HTTP to HTTPS
const HTTP_PORT = process.env.PORT || 80;
app.listen(HTTP_PORT, () => {
  console.log(`HTTP Server is running on port ${HTTP_PORT} and will redirect to HTTPS`);
});

app.get('*', (req, res) => {
  res.redirect(`https://${req.headers.host}${req.url}`);
});
