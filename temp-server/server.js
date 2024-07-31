const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3080;  // Port for the API server

// Middleware to parse URL-encoded bodies (for form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Utility function to read a file and send its content
const readFileAndRespond = (filePath, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send(`Error reading file: ${filePath}`);
            return;
        }
        res.send(data);
    });
};

// Endpoint to handle any service and action
app.post(/^\/DHub\/api\/([^\/]+)\/([^\/]+)$/, (req, res) => {
    //const service = req.params[0];  // Service name from the URL
    const action = req.params[1];   // Action name from the URL
    const directoryPath = path.join(__dirname, 'request-response', 'dummy-backend');
    const filePath = path.join(directoryPath, `${action}.txt`);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send(`Service not found: ${filePath}`);
            return;
        }
        readFileAndRespond(filePath, res);
    });
});

app.listen(port, () => {
    console.log(`API server is running on http://localhost:${port}`);
});
