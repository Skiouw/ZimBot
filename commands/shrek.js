const Discord = require('discord.js')

module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#3498DB')
        .setTitle('**El famoso shreksophone:** ')
        .setDescription('https://www.youtube.com/watch?v=z_HWtzUHm6s')
        .setImage('https://cdn.discordapp.com/attachments/786249062072057870/863534888878342154/9k.png'))
    },
    name: ".shrek"
}