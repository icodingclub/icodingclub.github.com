
var prettify = require('showdown-prettify');
var fs = require('fs');
var showdown = require('showdown');

function writeFile(file, data) {
    console.log("File processing is over");
    fs.writeFileSync(file, data, 'utf8');
}

const filePath = "error-boundaries/story";

const inPath = `${__dirname}/../articles/${filePath}.md`;
const outPath = `${__dirname}/../articles/${filePath}.html`;


var contents = fs.readFileSync(inPath, 'utf8');
var converter = new showdown.Converter({ extensions: ['prettify'] });
converter.setFlavor('github');


var html = converter.makeHtml(contents);

writeFile(outPath, html);