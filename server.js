const express = require('express');
const app = express();
const path = require("path");

// add middlewares
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static("public"));

app.get("*", (req, res)=>{
    res.sendfile(path.join(__dirname, "build", "index.html"));
});

const PORT =process.env.PORT || 7000;
console.log("server started on port:, PORT ");
app.listen(PORT);