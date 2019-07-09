const express = require("express");
const path = require('path');
const port = process.env.PORT || 8080

const app = express();

app.use(express.json());
app.use(express.static('dist'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get("/env", (request, response) => {
    response.json(process.env)
})

app.listen(port, (error) => {
    console.log(`started server on ${port}`)
})