const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login('');

bot.on("message", message => {
    let args = message.content.split(" ");
    let command = args[0];
    let data = message.content;
    if(!message.author.bot){
        if(command == "69" || command == "420" || data.search("nice") != -1){
            message.channel.send("nice"); 
        }
    }
});

