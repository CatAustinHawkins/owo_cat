const Discord = require('discord.js');
const { prefix1, token } = require('./config.json');
const client = new Discord.Client();

const Eris = require("eris");
const { Member } = require('eris');

const bot = new Eris.CommandClient(`NjkxMzk4MjkzOTAwNjIzOTEy.XuasZA.QRxXObD8-VonzO6VrCB234ZLUCQ`, {}, {
    description: "owo cat :)",
    owner: "Inane Cat",
    prefix: "cat "
});

client.once('ready', () => {
    console.log('Ready!')
})

client.on('message', message => {
    //so it doesnt reply to bots
    if(message.author.bot) return;


    //sets the 'Playing' thingy - so it says 'Playing cat help' 
    client.user.setPresence({ activity: { name: 'currently being edited :D' }, status: 'online' })
  .then(console.log)
  .catch(console.error);

//profile picture   
    pfpresponse = [`nice` , `incredible` , `amazing` , `ok` , `epic` , 'beautiful' , 'poggers' , 'swag']
    if(message.content === (`${prefix1}pfp`)) {
        message.reply("Here is your " + pfpresponse[Math.floor(Math.random() * pfpresponse.length)] + " profile picture - " + message.author.displayAvatarURL());
    }
    if(message.content === (`${prefix1}help pfp`)) {
        message.channel.send("Using the command `cat pfp` or 'cat avatar' shows your profile picture!")
    }
    
//profile picture   
    pfpresponse = [`nice` , `incredible` , `amazing` , `ok` , `epic` , 'beautiful' , 'poggers' , 'swag']
    if(message.content === (`${prefix1}avatar`)) {
        message.reply("Here is your " + pfpresponse[Math.floor(Math.random() * pfpresponse.length)] + " profile picture - " + message.author.displayAvatarURL());
    }
    if(message.content === (`${prefix1}help avatar`)) {
        message.channel.send("Using the command `cat avatar` or 'cat pfp' shows your profile picture!")
    }

//compliments
    compliments = [`You are perfect :two_hearts:` , `I love your smile` , `There's too many things to compliment you on >///<`, `Moto Moto likes you`, `You are perfect`, `Could you marry me?']
    if(message.content === (`${prefix1}compliment`)) {
        message.reply(compliments[Math.floor(Math.random() * compliments.length)])
    }
    if(message.content === (`${prefix1}help compliment`)) {
        message.channel.send("Using the command `cat compliment` compliments you!.")
    }

//unsettling compliments
    unsettlingcompliments = [`You have nice bones`, `I like your skin ^-^`, `you smell like fish =^..^=`  `You have the ideal amount of ribs! :D` , `Your skin would make a good purse`]
    if(message.content === (`${prefix1}unsettling compliment`)) {
     message.reply(unsettlingcompliments[Math.floor(Math.random() * unsettlingcompliments.length)])
    }
    if(message.content === (`${prefix1}help unsettling compliments`)) {
        message.channel.send("Using the command `cat unsettling compliments` compliments you! >:)")
    }
//rolls a dice
    dice = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`10`,`11`,`12`]
    if(message.content === (`${prefix1}rolldice`)) {
        message.channel.send("The dice rolled a " + dice[Math.floor(Math.random() * dice.length)])
    }
    if(message.content === (`${prefix1}help rolldice`)) {
        message.channel.send("Using the command `cat rolldice` rolls a 12 sided dice ^-^")
    }

//flips a coin
    coin = [`heads`,`tails`]
    if(message.content === (`${prefix1}flipcoin`)) {
        message.channel.send("The coin landed on " + coin[Math.floor(Math.random() * coin.length)])
    }
    if(message.content === (`${prefix1}help flipcoin`)) {
        message.channel.send("Using the command `cat flipcoin` flips a coin, which will either land on heads or tails.")
    }

//rates the user
    rate = [`...unrateable` ,`0/10 - :)` , `1/10` , `2/10` , `3/10` , `4/10` , `5/10` , `6/10`, `6/9 - *nice*` , `7/10` , `8/10` , `9/10` , `10/10 - :heart:`]
    if(message.content === (`${prefix1}rateme`)) {
        message.reply("Hm.. You are a " + rate[Math.floor(Math.random() * rate.length)]);
    }
    if(message.content === (`${prefix1}help rateme`)) {
        message.channel.send("Using the command `cat rateme` means you get a rating from the bot ^-^")
    }

//cuddles
    if(message.content === (`${prefix1}hug`)) {
        message.reply("Here is your virtual hug <3")
        message.channel.send("https://gph.is/291u1MC")
    }
    if(message.content === (`${prefix1}help hug`)) {
        message.channel.send("Using the command `cat hug` gives you a virtual hug! <3")
    }

//animal gifs
    //cat gifs
    catgifs = [`https://gph.is/g/4A62yvN` , `https://gfycat.com/malespeedyamoeba` , `https://giphy.com/gifs/MWSRkVoNaC30A` , `https://giphy.com/gifs/p4xp4BjHIdane` , `https://gph.is/g/4bWXPVv` , `https://gph.is/YBpwJd` , `https://gph.is/28ZplIv` , `https://gph.is/1bRgYXD` , `https://gph.is/1sGxfLk` , `https://gph.is/1Gd0FoR` , `https://giphy.com/gifs/hsmqIsivIaZfsrolkj` , `https://giphy.com/gifs/ihGNuteytCkgZDxYZb` , `https://gph.is/g/aK5geKe` , `https://giphy.com/gifs/QW3uv40im0VqILaDo3` , `https://giphy.com/gifs/fWwmgpFLsNQLYdQh8f` , `https://giphy.com/gifs/ZEZVFTqLEoXxEERTio` , `https://giphy.com/gifs/JpMScVE8dmqzrFWmVB` , `https://giphy.com/gifs/XfDQuEC7eWVZ6b76Zc` , `https://giphy.com/gifs/h5iT7ZBZT2yc0GNe2e` , `https://giphy.com/gifs/d9CYlu2xSbiptADvT9` , `https://giphy.com/gifs/UTB6jKjM9F685pc7Iw` , `https://giphy.com/gifs/J2fWVHqufCtEAm3Da5` , `https://giphy.com/gifs/ideShKCjCs7hrWgklX` , `https://giphy.com/gifs/H1qwle487i91zeaHzh`]
    catresponse = [`I love cats so much <3 Here's one!` , `Cats will always love you!` , `kitty!!! uwu ^-^` ,  `Cat Fact: House Cats share 95.6% of their genetic makeup with Tigers!` , `Cat Fact: a House Cat can run 30mph/48kmh!` , `Cat Fact: the oldest Cat lived to be 38!` , `Cat Fact: Cats cannot taste anything sweet!` , `Cat Fact: Cats can jump up to six times their own length!` , `Cat Fact: between 2002 and 2012 the average lifespan of a cat increased by a year!` , `Cat Fact: every cat’s nose-print is unique, like your human fingerprints!` , `Cat Fact: Cats have contributed to the extinction of 63 different species!` ]
    if(message.content === (`${prefix1}cat`)) {
        message.channel.send(catresponse[Math.floor(Math.random() * catresponse.length)])
        message.channel.send(catgifs[Math.floor(Math.random() * catgifs.length)])
    }
    if(message.content === (`${prefix1}help cat`)) {
        message.channel.send("Using the command `cat cat` tells you a Cat fact, and shows you a gif of a cat.")
    }
    //big cats
    bigcats = [`https://gph.is/2FQ1oPO` , `https://gph.is/2vIYhUl` , `https://gph.is/2x9Luhs` , `https://giphy.com/gifs/3o7526wZgmsGwFMF3i` , `https://giphy.com/gifs/3o752ldHKQQtLcgCEo` , `https://giphy.com/gifs/3o7aD9M5PEy9Teb7B6` , `https://gph.is/2Ek8r26` , `https://gph.is/2FSUd9O` , `https://giphy.com/gifs/8JQbGGz5tyVnnnu4uY` , `https://giphy.com/gifs/xTiN0uPQRihf3PwBKU` , `https://giphy.com/gifs/1X7tkqybHElaEaFazG` , `https://giphy.com/gifs/nu81tqIAUO8Le` , `https://giphy.com/gifs/DULXQjPy8qhW0` , `https://giphy.com/gifs/TamBxvSGZp5tu` , `https://giphy.com/gifs/5kFxVCoRl3WhuK7wbQ` , `https://gph.is/g/ZdozvrW` , `https://giphy.com/gifs/tsRqkQCs972nTvtojc` , `https://giphy.com/gifs/5YRcOBKAfdVFC` , `https://giphy.com/gifs/3otPoUGBfbuOgFhcpW` , `https://giphy.com/gifs/Nzb29UNGCEGxW` , `https://giphy.com/gifs/qXu0XdPmivC7e` , `https://giphy.com/gifs/xULW8lXeU67NykQ2MU` , `https://giphy.com/gifs/3o7525sTBPUsrmGJ6E` , `https://giphy.com/gifs/3o752bYX59WD4G5bWg` , `https://giphy.com/gifs/W2iwQeKLBzYXTT8GzD` , `https://giphy.com/gifs/7UHpzD9eayVPO` , `https://gph.is/1EjhPBx`]
    bigcatresponse = [`Big Cat Fact: Cheetahs can’t roar, but they can purr! ^-^` , `Big Cat Fact: A cheetah can go from zero to 60 miles per hour / 97 kilometres per hour in three seconds!` , `Big Cat Fact: A Lion has the loudest Roar out of all the cats!` , `Big Cat Facts: The actual Big Cats are: Lions, Tigers, Leopards and Jaguars!` , `Big Cat Fact: Panthers aren't a seperate species, they usually are the black variants of Leopards and Jaguars!` , `Big Cat Fact: Male Amur/Siberian Tigers can grow up to 10.5ft/3.3m long!` , `Big Cat Fact: The black spots that appear on a Cheetah's coat grow out of black spots on their skin!` , `Big Cat Fact: Snow leopards can't roar, but they do have a main call that has been described as a piercing yowl - which is so loud it can be heard over the roar of a river!` , `Big Cat Fact: A Snow Leopard can travel 25 miles/40 kilometres in a night!` , `Big Cat Fact: Some Snow Leopards can jump 9m/30ft in the air!`] 
    if(message.content === (`${prefix1}bigcat`)) {
        message.channel.send(bigcatresponse[Math.floor(Math.random() * bigcatresponse.length)])
        message.channel.send(bigcats[Math.floor(Math.random() * bigcats.length)])
    }
    if(message.content === (`${prefix1}help bigcat`)) {
        message.channel.send("Using the command `cat bigcat` tells you a fact about a big cat and shows you a gif of a big cat! (either a cheetah, snow leopard, lynx, bobcat, lion, tiger, jaguar, leopard, rusty-spotted cat or black-footed cat)")
    }

    //rodents
    rodentgifs = [`https://giphy.com/gifs/j6Hce8CPMX9VGOxcjL` , `https://giphy.com/gifs/WMeCezFeHrpjG` , `https://giphy.com/gifs/E0KmHELTpq9pK` , `https://giphy.com/gifs/mTRpdks4k5sgo` , `https://giphy.com/gifs/13DMEAmpAngKDC` , `https://giphy.com/gifs/ETTzs1c6mS36g` , `https://giphy.com/gifs/WQ6ZZhPKa1iQ8` , `https://giphy.com/gifs/e3lW9Ih8snBO8` , `https://giphy.com/gifs/Tcx92WfhuVS5W` , `https://giphy.com/gifs/qrIETRJB1WENy` , `https://giphy.com/gifs/q21C1cgr6gFAA` , `https://giphy.com/gifs/K8yRkFQQVqzUA` , `https://giphy.com/gifs/4gmLFw6zJVjHy` , `https://giphy.com/gifs/1dLiJGblBWmRqNV4fJ` , `https://giphy.com/gifs/vnZDSR4Sj4n7y` , `https://giphy.com/gifs/J8ITLdv6PktPy` , `https://giphy.com/gifs/BILk8Oiyby8Jq` , `https://giphy.com/gifs/Uojmh2N90OtcYIAWrv` , `https://giphy.com/gifs/PxQ1WhmU94Vnq` , `https://giphy.com/gifs/871qwDxfSemEE` , `https://giphy.com/gifs/TT86traJyZRzq` , `https://giphy.com/gifs/ONuQzM11fjvoY` , `https://giphy.com/gifs/ySAKulTdgY5G` , `https://giphy.com/gifs/pqCxL43whDKzS` , `https://giphy.com/gifs/1AeRHdZ17pvIiWYleY` , `https://giphy.com/gifs/v310uFXwypbpK`, `https://giphy.com/gifs/1VKi2xud4qsrS`]
    rodentresponse = [`Rodent Fact: Hamsters can learn their own name!` , `Rodent Fact: The first Hamsters came from Syria!` , `Rodent Fact: Chinchillas are native to the Andes Mountains in northern Chile!` , `Rodent Fact: Chinchillas are omnivores! (they eat plants + meat)` , `Rodent Fact: Chinchillas take dust baths to keep clean!` , `Rodent Fact: Mice can squeeze through openings as small as the size of a penny!` , `Rodent Fact: Most Rodents are Nocturnal!` , `Rodent Fact: A group of mice can be referred to as a 'mischief'` , `Rodent Fact: Rats can hold their breath for several minutes!` , `Rodent Fact: a Rat's tail helps it keep cool!` , `Rodent Fact: a Guinea Pig can open its eyes while in its mother’s womb 14 days before it is born!` , `Rodent Fact: The oldest Guinea Pig lived to be 14 years (and 10.5 months) old!` , `Rodent Fact: rabbits teeth never stop growing! :0` , `Rodent Fact: Like cats, rabbits purr when they are happy ^-^` , `Rodent Fact: Bunnies can grow up to 4 feet long!` , `Rodent Fact: Bunnies can live to be 10 years old!` , `Rodent Fact: Bunnies are crepuscular, which means they are most active at dawn and dusk.` , `Rodent Fact: Rabbits' vision almost covers 360 degrees!`]
    if(message.content === (`${prefix1}rodent`)) {
        message.channel.send(rodentresponse[Math.floor(Math.random() * rodentresponse.length)])
        message.channel.send(rodentgifs[Math.floor(Math.random() * rodentgifs.length)])
    }
    if(message.content === (`${prefix1}help rodent`)) {
        message.channel.send("Using the command `cat rodent` tells you a Rodent fact, and shows you a gif of a Rodent (either a Chinchilla, Bunny, Hamster, Rat, Mouse or Guinea Pig)")
    }
    //dogs
    doggifs = [`https://tenor.com/view/dog-uwuw-zoom-in-happy-gif-12094646` , `https://giphy.com/gifs/4Zo41lhzKt6iZ8xff9` , `https://giphy.com/gifs/OI8TsOa9KFAPu` , `https://giphy.com/gifs/fvmz3gCAip1M4` , `https://giphy.com/gifs/eeUJaTwsHh3tswkaYm` , `https://giphy.com/gifs/zkcXND5kY4POU` , `https://giphy.com/gifs/Fc32CJcqXzOXm` , `https://giphy.com/gifs/B2HqyXi7r6j9W9cCG2` , `https://giphy.com/gifs/aVPS1Ek7RhTtS` , `https://giphy.com/gifs/wmgsmee4a4vx6` , `https://giphy.com/gifs/Y3OsQArmae5jy`]
    dogresponse = [`cattos >> doggos B)` , `Dog Fact: A Greyhound could beat a Cheetah in a long distance race` , `Dog Fact: The tallest dog in the world is 44 inches/1.118m tall` , `Dog Fact: A Dog's sense of smell is 100,000 times better than Humans` , `Dog Fact: A greyhound can run 45mph/72kmh` , `Dog Fact: Dogs can also find yawns to be contagious!` , `Dog Fact: A panting Dog can take 300-400 breaths every minute! (compared to 30-40 a minute)`]
    if(message.content === (`${prefix1}dog`)) {
        message.channel.send(dogresponse[Math.floor(Math.random() * dogresponse.length)])
        message.channel.send(doggifs[Math.floor(Math.random() * doggifs.length)])
    }
    if(message.content === (`${prefix1}help dog`)) {
        message.channel.send("Using the command `cat dog` tells you a Dog fact, and shows you a gif of a dog.")
    }
    //wild cats
    wildgifs = [`https://gph.is/2cG6wcM` , `https://gph.is/XHWsDC` , `https://gph.is/2p9WM2o` , `https://gph.is/1HaJhMw` , `https://gph.is/16j9gWH` , `https://gph.is/1macHUJ` , `https://gph.is/227BkFL` , `https://gph.is/1SHjSnC` , `https://gph.is/1xJvz2O` , `https://gph.is/2WgkWFq` , `https://gph.is/2d947YM`]
    wildresponse = [`Stoat Facts: In Nothern Countries, Stoats change colours with the seasons to camouflage, and also to adapt its fur to the weather!` , `Stoat Fact: a Stoat once travelled 70km in 2 weeks!` , `Opossum Fact: They help slow the spread of Lyme Disease by eating Ticks!` , `Opossum Fact: Due to an Opossum's body temperature - they almost never get rabies!` , `Opossum Fact: Opossums are immune to most snake venom!` , `Raccoon Fact: Raccoons will try to wash their food before they eat it!` , `Raccoon Fact: Raccoons can live up to 20 years in captivity!` , `Raccoon Fact: A Raccoon once lived in the White House!` , `Weasel Fact: The Least Weasel is the smallest carnivore in the world!` , `Weasel Fact: Weasels stay warm by curling up into balls!`]
    if(message.content === (`${prefix1}wildcat`)) {
        message.channel.send("A Wild Cat! "  + wildresponse[Math.floor(Math.random() * wildresponse.length)] + " (disclaimer: not actual cats)")
        message.channel.send(wildgifs[Math.floor(Math.random() * wildgifs.length)])
    }
    if(message.content === (`${prefix1}help wildcats`)) {
        message.channel.send("Using the command `cat wildcats` tells you a fact about either a Stoat, Weasel, Raccoon or Opossum and displays a gif of one of those animals!")
    }
//not animals
    //pokemon :)
    pokemongifs = [`https://tenor.com/view/pokemon-gif-10677184` , `https://tenor.com/view/pokemon-thanksgiving-dinner-eating-gif-15681753` , `https://giphy.com/gifs/QU3JweIXJJ66AoEg60` , `https://giphy.com/gifs/UVTPSiROxe7nu42Vgl` , `https://giphy.com/gifs/TLaOAQ0LaSnGkLrU7y` , `https://giphy.com/gifs/WTcJH6qsrhybUsqXGt` , `https://giphy.com/gifs/ekv6kZP8h3lIyCwC4U` , `https://giphy.com/gifs/SxLcg0tT1DBmWESv1B` , `https://giphy.com/gifs/Vh8r7cYvaz2v6HPu5f` , `https://giphy.com/gifs/jRBqYpIlJUhhtNvIRA` , `https://giphy.com/gifs/VFG9bOmfkCcoU3sXbc` , `https://giphy.com/gifs/PjV1hMOl9nCtBPNzDR` , `https://giphy.com/gifs/f3pESajoCJVjKH9QR9` , `https://giphy.com/gifs/S72RZRk8Gmbsm9795r` , `https://giphy.com/gifs/cnu5KmCWKYH4NTUzMw` , `https://giphy.com/gifs/OyYK79ZIfWfCM` , `https://giphy.com/gifs/mcJohbfGPATW8` , `https://giphy.com/gifs/IfuEfxTfeorNS` , `https://gph.is/1Spu7J6` , `https://gph.is/235n1Bg` , `https://gph.is/Nd0Ck2` , `https://gph.is/1wF2llR`]
    pokemon = [`Rhydon was the first Pokemon created` , `Clefairy was almost the mascot for the series` , `Victini is the only Pokemon with the Pokdex number 000` , `Koffing And Weezing Were Going To Be Named After American Cities` , `Pokemon is the only video game to appear on the front cover of TIME magazine.` , `Charmander has the longest name among all the unevolved starters.` , `The First Edition Holographic Charizard Card is valued at $55,000+` , `Ponyta is easily capable of jumping over the Eiffel Tower in a single giant leap` , `Rapidash can run at 150mph/241kmh` , `Dragonite can fly twice the speed of sound.` , `Luxray is said to have the ability to see through objects.` , `Drifloon kills children. :eyes:` , `Gothorita manipulates children :eyes:` , `Spoink can never stop bouncing- otherwise it will die` , `Magikarp can jump 29,000 feet (8840 metres) into the air`]
    if(message.content === (`${prefix1}pokemon`)) {
        message.channel.send("Here is some random pokemon trivia: " + pokemon[Math.floor(Math.random() * pokemon.length)])
        message.channel.send(pokemongifs[Math.floor(Math.random() * pokemongifs.length)])
    }
    if(message.content === (`${prefix1}help pokemon`)) {
        message.channel.send("Using the command `cat pokemon` shows you a gif of a random pokemon, and also some random pokemon trivia!")
    }

    facts = [`You are Beautiful` , `I love you!` , `107 billion humans have lived on the Earth!` , `Trans Rights are Human Rights!` , `You are epic!` , `Black Lives Matter!` , `You eat at least 1.5 bugs in chocolate every year` , `Lobsters pee out of their faces.` , `The longest wedding veil was 22,843ft/6962m` , `Humans are just one of the estimated 8.7 million species on Earth.` , `Consuming Two to three teaspoons of raw nutmeg can induce hallucinations, convulsions, pain, nausea, and paranoia that can last for several days` , `The heaviest apple grown was a Hokuto apple and it weighed 1.849kg` , `99.9% of species that have lived on Earth are extinct` , `Cats once delivered mail in Belgium.` , `The longest book title contains 1,809 words.` , `Scientists have partially revived disembodied pig brains.` , `The Apollo astronauts' footprints on the Moon could stay there for 100 million years.` , `Some cats are allergic to people.` , `You can hear a blue whale's heartbeat from more than 2 miles away.` , `Before the invention of color TV, 75% of people said they dreamed in black and white. Today, only 12% do.` , `Ketchup was sold as medicine in the 1830s.` , `Snakes can belch fire.` , `Cleopatra lived closer to the invention of the iPhone than she did to the building of the Great Pyramid.`, `Shakespeare and Pocahontas both lived during the same time.` , `France was still executing people with a guillotine when the first Star Wars film came out.` , `Mammoths went extinct 1,000 years after the Egyptians finished building the Great Pyramid.` , `Anne Frank, Martin Luther King Jr., and Barbara Walters were born in the same year, 1929.` , `The difference in time between when Tyrannosaurus Rex and Stegosaurus lived is greater than the difference in time between Tyrannosaurus Rex and now.` , `Cambridge University is older than the Aztec empire.` , `Every two minutes, we take more pictures than all of humanity did in the 19th century.` , `Scotland is farther north than Alaska.` , `The pyramids were as old to the Romans as the Romans are to us.` , `A TI-83 calculator has six times more processing power than the computer that landed Apollo 11 on the moon.` , `Rhydon was the first Pokemon created` , `Clefairy was almost the mascot for the Pokemon series` , `Victini is the only Pokemon with the Pokdex number 000` , `Koffing And Weezing Were Going To Be Named After American Cities` , `Pokemon is the only video game to appear on the front cover of TIME magazine.` , `Charmander has the longest name among all the unevolved starters.` , `The First Edition Holographic Charizard Card is valued at $55,000+` , `Ponyta is easily capable of jumping over the Eiffel Tower in a single giant leap` , `Rapidash can run at 150mph/241kmh` , `Dragonite can fly twice the speed of sound.` , `Luxray is said to have the ability to see through objects.` , `Drifloon kills children. :eyes:` , `Gothorita manipulates children :eyes:` , `Spoink can never stop bouncing- otherwise it will die` , `Magikarp can jump 29,000 feet (8840 metres) into the air` , `A Greyhound could beat a Cheetah in a long distance race` , `The tallest dog in the world is 44 inches/1.118m tall` , `A Dog's sense of smell is 100,000 times better than Humans` , `A greyhound can run 45mph/72kmh` , `Dogs can also find yawns to be contagious!` , `A panting Dog can take 300-400 breaths every minute! (compared to 30-40 a minute)` , `In Nothern Countries, Stoats change colours with the seasons to camouflage, and also to adapt its fur to the weather!` , `A Stoat once travelled 70km in 2 weeks!` , `They help slow the spread of Lyme Disease by eating Ticks!` , `Due to an Opossum's body temperature - they almost never get rabies!` , `Opossums are immune to most snake venom!` , `Raccoons will try to wash their food before they eat it!` , `Raccoons can live up to 20 years in captivity!` , `A Raccoon once lived in the White House!` , `The Least Weasel is the smallest carnivore in the world!` , `Weasels stay warm by curling up into balls!` , `Hamsters can learn their own name!` , `The first Hamsters came from Syria!` , `Chinchillas are native to the Andes Mountains in northern Chile!` , `Chinchillas are omnivores! (they eat plants + meat)` , `Chinchillas take dust baths to keep clean!` , `Mice can squeeze through openings as small as the size of a penny!` , `Most Rodents are Nocturnal!` , `A group of mice can be referred to as a 'mischief'` , `Rats can hold their breath for several minutes!` , `A Rat's tail helps it keep cool!` , `A Guinea Pig can open its eyes while in its mother’s womb 14 days before it is born!` , `The oldest Guinea Pig lived to be 14 years (and 10.5 months) old!` , `Rabbits teeth never stop growing! :0` , `Like cats, rabbits purr when they are happy ^-^` , `Bunnies can grow up to 4 feet long!` , `Bunnies can live to be 10 years old!` , `Bunnies are crepuscular, which means they are most active at dawn and dusk.` , `Rabbits' vision almost covers 360 degrees!` , `Cheetahs can’t roar, but they can purr! ^-^` , `A cheetah can go from zero to 60 miles per hour / 97 kilometres per hour in three seconds!` , `A Lion has the loudest Roar out of all the cats!` , `Panthers aren't a seperate species of big cat, they usually are the black variants of Leopards and Jaguars!` , `Male Amur/Siberian Tigers can grow up to 10.5ft/3.3m long!` , `The black spots that appear on a Cheetah's coat grow out of black spots on their skin!` , `Snow leopards can't roar, but they do have a main call that has been described as a piercing yowl - which is so loud it can be heard over the roar of a river!` , `A Snow Leopard can travel 25 miles/40 kilometres in a night!` , `Some Snow Leopards can jump 9m/30ft in the air!` , `House Cats share 95.6% of their genetic makeup with Tigers!` , `A House Cat can run 30mph/48kmh!` , `The oldest Cat lived to be 38!` , `Cats cannot taste anything sweet!` , `Cats can jump up to six times their own length!` , `Between 2002 and 2012 the average lifespan of a cat increased by a year!` , `Every cat’s nose-print is unique, like your human fingerprints!` , `House-Cats have contributed to the extinction of 63 different species!`]
    if(message.content === (`${prefix1}facts`)) {
        message.channel.send("Here is your random fact: " + facts[Math.floor(Math.random() * facts.length)])
    }
    if(message.content === (`${prefix1}help facts`)) {
        message.channel.send("Using the command `cat facts` tells you a random fact!")
    }

//information
    if(message.content === (`${prefix1}invite`)) {
        message.reply("Here is the invite link to add the bot to your server - https://bit.ly/owo_cat ^-^")
    }
    if(message.content === (`${prefix1}help invite`)) {
        message.channel.send("Using the command `cat invite` sends you a link to add the bot to your server (https://bit.ly/owo_cat)")
    }

    if(message.content === (`${prefix1}information`)) {
        message.channel.send("owo cat was made using javascript, by Inane Cat (c a t#2829)")
        message.channel.send("More information about the bot: https://bit.ly/help_owocat")
    }
    if(message.content === (`${prefix1}help information`)) {
        message.channel.send("Using the command `cat information` tells you that this bot was made using javascript, and gives you a link for more information (https://bit.ly/help_owocat)")
    }

//help
    if(message.content === (`${prefix1}help`)) {
        message.channel.send("Hello ^-^ I am owo_cat! The prefix is `cat ` (For Example: `cat cat`)\nAnimal Commands: `cat`, `bigcat`, `wildcat`, `rodent`, `dog`, & `pokemon`\nPersonal Commands: `rateme` , `compliment`, `unsettling compliment`, `hug` & `pfp`\nOther Commands: `facts`, `flipcoin`, `rolldice`\nInformation Commands: `help`, `invite`, `information`\nUse `cat help [command]` for more information about each command! For example: `cat help cat`\nOr go to this link - https://bit.ly/help_owocat")
    }
    if(message.content === (`${prefix1}help help`)) {
        message.channel.send("Using the command `cat help` tells you the prefix (`cat `) and lists every command!")
    }

})

//bot login
client.login(process.env.token)
