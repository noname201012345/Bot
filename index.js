const discord = require("discord.js");
const Sequelize = require('sequelize');
const fs = require("fs");
const config = require("./config.json");
const bot = new discord.Client({disablelEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is ready!`);
});

bot.commands = new discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("no file found");

  console.log(`Loading $(jsfiles.length) commands...`)
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`$(i + 1): ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length))
  if (cmd) cmd.run(bot, message, args)
  
  if (message.content.startsWith(prefix)) {
      const input = message.content.slice(prefix.length).split(' ');
      const command = input.shift();
      const commandArgs = input.join(' ');

      if (command === 'addtag') {
	// [delta]
      } else if (command === 'tag') {
	// [epsilon]
      } else if (command === 'edittag') {
			// [zeta]
      } else if (command === 'taginfo') {
			// [theta]
      } else if (command === 'showtags') {
			// [lambda]
      } else if (command === 'removetag') {
			// [mu]
      }
    }
});

bot.login(config.token);
