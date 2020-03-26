const express = require('express');

const formidableMiddleware = require('express-formidable');
const formidable = require('formidable');
const path = require('path');

const app = express();

app.use(formidableMiddleware({
    encoding: 'utf-8',
    uploadDir: path.join(__dirname + '/files-temporary'),
    multiples: true, // req.files to be arrays of files
}, {
    event: 'end',
    action: function (req, res, next, name, file) {
        console.log(name);
    }
));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
})
app.post('/upload-files', (req, res) => {
    
    res.sendFile(__dirname + '/view/index.html')

})

app.listen(3000, () => {
    console.log('Listening on port 3k');

})