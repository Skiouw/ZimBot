const Discord = require('discord.js'),
    replies = [`**Martinez Maloric, le 9 Juin 2021 à 8:27,**
                petit zimbra mail pour vous aider si vous êtes in the sauce et pas in ze boite t'as capté`, //1

                `**Lehmann Roméo, le 8 Juin 2021 à 11:14,**
                vous avez finis vos mahara ? j'ai mis des trucs lolilol sur vos murs`, //2
                
                `**Martinez Maloric, le 2 Juin 2021 à 10:49,**
                bonjour,
                ci je me permet de vous contacter aujourd'hui c'est pour une raison très simple.
                Y a pas des réponses en despi svp.`, //3

                `**Chalot Damien, le 28 Mai 2021 à 10:21,**
                prend ca sologny, le professionnalisme dans ta gueule`,//4

                `**Huguenel Thomas, le 19 Mai 2021 à 9:43,**
                . 　　　。　　　　•　 　ﾟ　　。 　　.

                　　　.　　　 　　.　　　　　。　　 。　. 　
                
                .　　 。　　　• . 　　 • 　　　　•
                
                　　ﾟ　　 Roméo was An Impostor.　 ඞ。　.
                
                　　'　　　 1 Impostor remains 　 　　。
                
                　　ﾟ　　　.　　　. 　　　　.　 .`,//5

                `**Lehmann Roméo, le 19 Mai 2021 à 8:40,**
                rappelle moi ton prenom SE BA STIEN`,//6

                `**Martinez Maloric, le 17 Mai 2021 à 16:01,**
                SHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEESH
                Ptite réponse ou quoi ?`,//7

                `**Pasquier Benjamin, le 11 Mai 2021 à 8:36,**
                c'est quoi ce que tu à envoyer à 8h16 ?`,//8

                `**Lehmann Roméo, le 11 Mai 2021 à 8:35,**
                thorsten bouge t locks`,//9

                `**Martinez Maloric, le 5 Mai 2021 à 15:06,**
                Les persimotards qui roule en persiclomoteurs si vous  voulez j'ai getMouvementpouraller`//10
]
 
module.exports = {
    run: (message) => {
        message.channel.send(replies[Math.floor(Math.random() * replies.length)])
    },
    name: '.gang'
}
