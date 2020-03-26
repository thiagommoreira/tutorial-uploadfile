const express = require("express");

const formidableMiddleware = require("express-formidable");
const formidable = require("formidable");
const path = require("path");

const app = express();

const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/files-temporary/",
    keepExtensions: true
  });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

app.get("/upload-files", (req, res) => {
    res.sendFile(__dirname + "/view/upload-files.html")
})

form.on("file", (filename, file) => {
  form.emit("data", { name: "file", key: filename, value: file });
});

app.post("/upload-files", (req, res) => {
  
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    //console.log(fields);
   // console.log(files);
  });
  res.redirect("/view/upload-files.html");
});

app.listen(3000, () => {
  console.log("Listening on port 3k");
});
