const express = require("express");

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

app.get("/uploadfiles", (req, res) => {
    res.sendFile(__dirname + "/view/uploadfiles.html")
})

form.on("file", (filename, file) => {
  form.emit("data", { name: "file", key: filename, value: file });
  //console.log(filename)
  console.log(file.name)
  console.log(file.path)
  
});

app.post("/upload-files", (req, res, next) => {
  
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    
  });
  res.redirect("/uploadfiles.html");

});

app.listen(3000, () => {
  console.log("Listening on port 3k");
});
