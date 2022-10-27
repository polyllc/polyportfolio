const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login('');
let channel = "";

bot.on("message", message => {
  if(message.member){
  if(message.member.hasPermission("ADMINISTRATOR")){
    let args = message.content.split(" ");
    let command = args[0];
    if(command == ";startat"){
      if(channel){
      if(Number.isInteger(parseInt(args[1]))){
        var lastMessage = args[1];
        bot.channels.get(channel.id).send(lastMessage);
        message.reply("Started at " + args[1]);
      }
    }
    else{
      message.reply(":(");
    }
    }
    if(command == ";channel"){
        if(message.member.hasPermission("ADMINISTRATOR")){
        if(args[1]){
        if(message.guild.channels.cache.find(channel => channel.name === args[1])){
          channel = message.guild.channels.cache.find(channel => channel.name === args[1]).name;
            message.reply("Ok, assigned to channel #" + channel);
          channel = message.guild.channels.cache.find(channel => channel.name === args[1]);
        }
        else{
            message.reply("Channel #" + args[1] + " was not found");
        }
    }
    else{
        message.reply("Channel is " + channel);
    }
    }
    else{
        message.reply("You can't use me :(\nYou need to be an Admin");
    }
  }
}
}
});
var numberMessage = 0;
var lastMessage = "";
var pause = 1;
bot.on("message", message => {
if(channel){
channel.messages.fetch({ limit: 2 }).then(messages => {
  lastMessage = messages.first().content;
  console.log(lastMessage);
  numberMessage = parseInt(lastMessage);
  beforeMessage = parseInt(messages.last().content);
	
  if(!Number.isInteger(numberMessage)){
    messages.first().delete();
  }

  if(!Number.isInteger(beforeMessage)){
    messages.last().delete();
  }

  if(pause == 0){
    pause = 1;
  }
  else if(pause == 1){
    pause = 0;
  }
  if(Number.isInteger(beforeMessage) && Number.isInteger(numberMessage) && pause == 1){
    if(numberMessage - 1 == beforeMessage){
    	numberMessage++;
    }
    else{
	messages.first().delete();
	numberMessage = beforeMessage+1;
    }
    bot.channels.cache.get(channel.id).send(numberMessage);
    bot.user.setActivity("Counting at " + numberMessage, {type: "LISTENING"});
  }
});
//.catch(console.error);
}
});
