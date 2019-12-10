const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login('NjUzODg4ODA1NjYwNTI0NTY2.Xe9kig.1gKWklwT3ClePyc2LPIqtpP2nw0');