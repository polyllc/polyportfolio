const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login('');
let channel = "";

bot.on("message", message => {
    if (!message.guild) return;
    if (message.author.bot) { return; }
    if (message.channel.type == 'dm') { return; }
    let args = message.content.split(" ");
    let command = args[0];
    let data = message.content;
   //if(message.member.hasPermission("ADMINISTRATOR")){
    if(command == "%create"){

console.log("1");
	    var i = 2;
	    var text = "";
	   for(var i = 1; i <= args.length - 1; i++){
                text += " " + args[i];
           }
console.log("2");
message.delete();
	    message.channel.send({
                    embed: new Discord.MessageEmbed().setAuthor("Poll by " + message.author.username).setDescription(text)}).then(sent => {
sent.react('👍');
 	        sent.react('👎');
	    
console.log("3");
	    });
    }
  //  }
});