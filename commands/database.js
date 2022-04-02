const discord = require('discord.js')
const bot = require('../index')
const client = bot.client
const config = require("../config.json")


module.exports = () => {
    client.on("messageCreate",(msg) => {
        var args = msg.content.split(" ")
        if (args[0] == config.prefix+"resetdatabase" || args[0] == config.prefix+"resetdb"){
            const databaseEmbed = new discord.MessageEmbed()
                .setColor(config.main_color)
                .setTitle("How to reset the database:")
                .setDescription("1: Go to the folder `./storage` in your bot's directory.\n\n2: If posible remove the folders\n`./tickets`, `./transcripts` & `./userTickets`\nfrom the folder `./storage`\n\n3: Restart the bot")
                .setFooter({text:"if it doesn't work, create an issue on github or DM me on discord!"})

            msg.channel.send({embeds:[databaseEmbed]})
            if (config.logs){console.log("[command] "+config.prefix+"resetdatabase (user:"+msg.author.username+")")}
        }
    })
}