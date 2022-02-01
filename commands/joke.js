const Discord = require('discord.js'),
    joke = [
`**Pourquoi un chasseur emmène-t-il son fusil aux toilettes ?**
.
.
||Pour tirer la chasse.||`, //1
//////////////////////////////////////////////////////
`**Qu'est ce qui est blanc, froid, qui tombe en hiver et qui termine par ard ?**
.
.
||De la neige, connard.||`, //2
//////////////////////////////////////////////////////               
`**Pourquoi est-ce que les moutons aiment le chewing-gum ?**
.
.
||Parce que c’est bon pour la laine.||`, //3
//////////////////////////////////////////////////////
`**Que dit un italien pour dire au revoir ?**
.
.
||Pasta la vista.||`,//4
//////////////////////////////////////////////////////
`**Où vont les biscottes pour danser ?**
.
.
||En biscothèque.||`,//5
//////////////////////////////////////////////////////
`**D'où viennent les gens les plus dangereux ?**
.
.
||D’Angers.||`,//6
//////////////////////////////////////////////////////
`**Comment appelle-t-on un chat qui va dans l'espace ?**
.
.
||Un chatellite.||`,//7
//////////////////////////////////////////////////////
`**Que prend un éléphant dans un bar ?**
.
.
||Beaucoup de place.||`,//8
//////////////////////////////////////////////////////
`**Que fait un cendrier devant un ascenseur ?**
.
.
||Il veut des cendres.||`,//9
//////////////////////////////////////////////////////
`**Que fait une fraise sur un cheval ?**
. 
.
||Tagada Tagada.||`,//10
//////////////////////////////////////////////////////
`**Quelle princesse a les lèvres gercées ?**
.
.
||Labello bois dormant.||`, //11
//////////////////////////////////////////////////////
`**Pourquoi est-ce que les bouteilles de bière coulent ?**
.
.
||Parce qu’elles savent panaché.||`, //12
//////////////////////////////////////////////////////               
`**Pourquoi faut-il enlever ses lunettes avant un alcootest ?**
.
.
||Ca fait deux verres en moins.||`, //13
//////////////////////////////////////////////////////
`**Pourquoi n'y a-t-il plus de mammouths sur terre ?**
.
.
||Parce qu’il n’y a plus de pappouths.||`,//14
//////////////////////////////////////////////////////
`**Comment savoir quand un sapin est en colère ?**
.
.
||Il a les boules.||`,//15
//////////////////////////////////////////////////////
`**Qu'est ce qu'une manifestation d'aveugles ?**
.
.
||Un festival de cannes.||`,//16
//////////////////////////////////////////////////////
`**Qu'est-ce que fait un prof de Maths lorsqu'il est triste ?**
.
.
||Il D'.||`,//17
//////////////////////////////////////////////////////
`**Comment appelle-t-on un Parisien qui sourit ?**
.
.
||Un touriste.||`,//18
//////////////////////////////////////////////////////
`**Que fait une vache quand elle ferme les yeux ?**
.
.
||Du lait concentré.||`,//19
//////////////////////////////////////////////////////
`**Comment est-ce que les abeilles communiquent entre elles ?**
. 
.
||Par e-miel.||`,//20
//////////////////////////////////////////////////////
`**Qu'est-ce qui est mignon, bleu et qui clignote ?**
.
.
||Un bébé chat bleu qui clignote.||`, //21
//////////////////////////////////////////////////////
`**Que dit un informaticien quand il s'ennuie ?**
.
.
||Je me fichier.||`, //22
//////////////////////////////////////////////////////               
`**Pourquoi dit-on que les poissons travaillent illégalement ?**
.
.
||Parce qu’ils n’ont pas de FISH de paie.||`, //23
//////////////////////////////////////////////////////
`**Pourquoi est-ce que Winnie l'Ourson veut absolument se marier ?**
.
.
||Pour partir en lune de miel.||`,//24
//////////////////////////////////////////////////////
`**Quel est le style musical préféré des médecins ?**
.
.
||Le blouse.||`,//25
//////////////////////////////////////////////////////
`**Que fait un poussin de 200kg ?**
.
.
||PIOUUUU! PIOUUUU!||`,//26
//////////////////////////////////////////////////////
`**Que dit une noisette quand elle tombe à l'eau ?**
.
.
||Je me noix.||`,//27
//////////////////////////////////////////////////////
`**Comment appelle t-on un rat qui masse des ballons ?**
.
.
||Un rat-masseur de balles.||`,//28
//////////////////////////////////////////////////////
`**Où est-ce que les super héros vont-ils faire leurs courses ?**
.
.
||Au supermarché.||`,//29
//////////////////////////////////////////////////////
`**Quelle est la différence entre un rappeur et un campeur ?**
. 
.
||Le rappeur nique ta mère et le campeur monte ta tente.||`,//30
//////////////////////////////////////////////////////
`**Qu'est-ce qu'un hamster dans l'espace ?**
.
.
||Un hamsteroïde.||`, //31
//////////////////////////////////////////////////////
`**Quelle est la meilleure heure pour écouter de la musique ?**
.
.
||Deezer !||`, //32
//////////////////////////////////////////////////////               
`**Pourquoi les Belges viennent-ils à la messe avec du savon ?**
.
.
||Pour l’Ave Maria.||`, //33
//////////////////////////////////////////////////////
`**C'est l'histoire du ptit dej, tu la connais ?**
.
.
||Pas de bol.||`,//34
//////////////////////////////////////////////////////
`**Que faisaient les dinosaures quand ils n'arrivaient pas à se décider ?**
.
.
||Des tirageosaures.||`,//35
//////////////////////////////////////////////////////
`**Quel est le point commun entre les maths et le sexe ?**
.
.
||Plus il y a d’inconnues, plus c’est chaud.||`,//36
//////////////////////////////////////////////////////
`**Quel est le super héros qui donne le plus vite l'heure ?**
.
.
||Speed heure man.||`,//37
//////////////////////////////////////////////////////
`**Quel est le fruit préféré des profs d'histoire ?**
.
.
||Les dates.||`,//38
//////////////////////////////////////////////////////
`**Quelle est la femme du hamster ?**
.
.
||L’amsterdam.||`,//39
//////////////////////////////////////////////////////
`**Qu'est-ce qu'un mort qui coupe du fromage ?**
. 
.
||Un fend-tome.||`,//40
//////////////////////////////////////////////////////
`**Quel est le café préféré des espagnols ?**
.
.
||Le café Olé.||`, //41
//////////////////////////////////////////////////////
`**Comment reconnaît-on un cannibale ?**
.
.
||Il mange des petits Suisses.||`, //42
//////////////////////////////////////////////////////               
`**Quel est l'aliment le plus hilarant ?**
.
.
||Le riz.||`, //43
//////////////////////////////////////////////////////
`**Comment appelle-t-on un combat entre un petit pois et une carotte ?**
.
.
||Un bon duel.||`,//44
//////////////////////////////////////////////////////
`**Quel est le réseau préféré des pêcheurs ?**
.
.
||Truiteur.||`,//45
//////////////////////////////////////////////////////
`**Où est-ce que l'homme invisible part en vacances ?**
.
.
||Chez ses transparents.||`,//46
//////////////////////////////////////////////////////
`**Qu'est-ce qui est transparent et qui court dans un champ ?**
.
.
||Un troupeau de vitres.||`,//47
//////////////////////////////////////////////////////
`**Quel est le musicien préféré des maladies ?**
.
.
||Bach-terie.||`,//48
//////////////////////////////////////////////////////
`**Pourquoi est-ce que les livres ont-ils toujours chaud ?**
.
.
||Parce qu’ils ont une couverture.||`,//49
//////////////////////////////////////////////////////
`**Que dit une mère à son fils geek quand le dîner est servi ?**
. 
.
||Alt Tab !||`,//50
//////////////////////////////////////////////////////
]
 
module.exports = {
    run: (message) => {
        message.channel.send(joke[Math.floor(Math.random() * joke.length)])
    },
    name: '.joke'
}
