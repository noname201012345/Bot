const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  return message.channel.send(".");

};

module.exports.help = {
  name: "help"
};