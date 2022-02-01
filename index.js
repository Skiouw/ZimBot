const bdd = require("./bdd.json");
const imagebdd = require('./image.json');

const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')
 
client.login(config.token)
client.commands = new Discord.Collection()
 
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})
 
//commandes de base
client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return
 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
})

//acitvité
client.on('ready', () => {
    const statuses = [
        () => `${client.guilds.cache.size} serveurs`,
        () => `Version 1.3`,
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs`,
        () => `Dernière MAJ le 21/07/21`,
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 5e3)
})

//image random
client.on("message", async message => {
    if (message.content == "zimbra.meme") {
        if (message.member.user.bot) return;
        var counter = 0;
        imagebdd.forEach(file => {
            counter++
        })
        random = Math.floor(Math.random() * counter);
        message.channel.send({ files: [`./images/${imagebdd[random]}`] });
    }
});

//envie de canet
client.on("message", async message => {
    if (message.content == "zimbra.caner") {
        message.channel.send({ files: [`./images/caner.png`] });
    }
});

//fonction save bdd
function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}

function SaveImage() {
    fs.writeFile("./images.json", JSON.stringify(imagebdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}