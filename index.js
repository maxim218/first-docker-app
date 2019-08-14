"use strict";

function write(message) {
    console.log("     ");
    console.log(message);
}

const express = require("express");
const app = express();
const port = 80;
app.listen(port);
write("Port: " + port);

app.get("/", function(request, response) {
    const rnd = Math.random() + "";
    write(rnd);
    response.end(rnd);
});
