const Discord = require('discord.js')

module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
        .setColor('#3498DB')
        .setFooter('Ce bot a été développé par Skyuw. Copyright © 2021 - Tous droits réservés', 'https://cdn.discordapp.com/attachments/786249062072057870/863512711090405386/bodgYYU-_400x400.jpg')
        .setTitle('**Voici les commandes disponibles avec ce bot:** ')
        .setDescription(`**zimbra.help**
                        Liste toutes les commandes disponibles.

                        **zimbra.gang**
                        Compilation des 10 meilleurs zimbra mails.

                        **zimbra.shrek**
                        El famoso shreksophone.

                        **zimbra.rap**
                        Rap des persifleurs.

                        **zimbra.meme**
                        Meme aléatoire.

                        **zimbra.joke**
                        Les 50 meilleurs (ou pires) blagues !

                        **zimbra.caner**
                        Envie de caner enfaite.
                        
                        **zimbra.mail**
                        Liste les mails disponible avec la commande zimbra.gang.
                        
                        **zimbra.test**
                        La toute première commande réalisé sur ce bot.`))
    },
    name: ".help"
}