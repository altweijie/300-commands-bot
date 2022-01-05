const Discord = require("discord.js");
const cnf = require('../../config.js');

module.exports = {
  name: "invite",
  aliases: ["getbot"],
  execute: async(client, message, args, data, db) => {
try {
const embed = new Discord.MessageEmbed()
  .setTitle("Invite the bot")
  .setColor('RANDOM')
  .addField("Invite to Discord server", "[Invite the bot here (Recomended!)](https://discord.gg/EVrnNxYdEN)\n[Invite the bot here (Admin Perm)](https://discord.com/oauth2/authorize?client_id=928106731760943106&permissions=26038889663&scope=bot%20applications.commands)")
  .addField("Server", `[Join support server](https://discord.gg/EVrnNxYdEN)`)
  .setFooter("Bot created by Jeck")
  .setImage(`https://images-ext-1.discordapp.net/external/eWe3DimWXdYRwGPHx_ai-sOKVNdS6YPc7s2ofj2Vbco/%3Fsize%3D1024/https/cdn.discordapp.com/icons/866236742739034120/a_5acf299e4ee75656b404686db3d1d2ff.gif`)
  .setTimestamp()
message.author.send({embed})

message.channel.send({embed: {
            color: 3447003,
            description: "Check a DM message!"
        }})
} catch (err) {
    message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }})
}
}
}
module.exports.help = {
    name: "invite",
    description: "Sends a bot invite",
    usage: "invite",
    type: "General"  
}
