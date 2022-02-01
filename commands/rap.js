const Discord = require('discord.js')

module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#3498DB')
        .setTitle('**Voici le rap des persifleurs en avant-première:** ')
        .setDescription('[Rap des persifleurs](https://www.youtube.com/watch?v=dQw4w9WgXcQ)')
        .setImage('https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2020.2F04.2F27.2F74b0a223-f380-4806-ae6b-9fa1d960c257.2Ejpeg/850x478/quality/90/crop-from/center/focus-point/5165%2C2075/pierre-jean-chalencon-ce-coup-de-couteau-de-la-part-de-l-homme-qu-il-aime-depuis-20-ans.jpeg'))
    },
    name: ".rap"
}