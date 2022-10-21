var ytdl = require("ytdl-core");
var fs = require("fs");
const yt = require('simpleyt');
var sanitize = require("sanitize-filename");
console.log(process.argv.splice(1));
var sanitized = sanitize(process.argv.splice(1).join(""));
yt(sanitized).then(result => {
    if(result){
        console.log(result[0]);
        ytdl(result[0].uri).pipe(fs.createWriteStream(sanitize(result[0].title) + ".mp3"));
    }
}).catch(console.error);