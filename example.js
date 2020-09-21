const Eris = require("eris");

// Replace BOT_TOKEN with your bot account's token
const bot = new Eris.CommandClient("NjkxMzk4MjkzOTAwNjIzOTEy.XuasZA.QRxXObD8-VonzO6VrCB234ZLUCQ", {}, {
    description: "A test bot made with Eris",
    owner: "somebody",
    prefix: "!"
});

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
});

bot.registerCommand("poll", "poll test", { // Make a ping command
// Responds with "Pong!" when someone says "!ping"
    description: "Pong!",
    fullDescription: "This command could be used to check if the bot is up. Or entertainment when you're bored.",
    reactionButtons: [ // Add reaction buttons to the command
        {
            emoji: "👌",
            type: "edit",
            response: ["Option A: 1 Option B:1 Option C:1"]
            
        },
        {
            emoji: "👍",
            type: "edit", // Pick a new pong variation
            response: ["Option A: 1 Option B:1 Option C: 1"]
        },
        {
            emoji: "✌️",
            type: "edit",
            response: ["Option A: 1 Option B:1 Option C: 1", "Option A: 1 Option B:1 Option C: 1"]
        }
    ],
    reactionButtonTimeout: 3000000 // After 30 seconds, the buttons won't work anymore
});

    //polls
    //if(message.content.startsWith(`${prefix1}poll`)) 
        //message.channel.send("You want to do a poll? ＾● ⋏ ●＾")
        // Create a reaction collector
        //const filter = (reaction, user) => reaction.emoji.name === ':okhand:' && user.id === 'someID'
        //message.awaitReactions(filter, { time: 15000 })
        //collected => console.log(`Collected ${collected.size} reactions`)

       //awaitReactions(filter, options = {}) 
         //return new Promise((resolve, reject) => {
           //const collector = this.createReactionCollector(filter, options);
           //collector.once('end', (reactions, reason) => {
             //if (options.errors && options.errors.includes(reason)) reject(reactions);
             //else resolve(reactions);
           //});
         //});
    
    //moderator stuff
    if(message.member.hasPermission([`KICK_MEMBERS`])) {
        if(message.content.startsWith(`${prefix1}kick`)) {
            let member = message.mentions.members.first();
            member.kick().then((member) => {
                message.channel.send("yeet" + member.displayName)
                .catch((err) => {
                    message.channel.send("yikes! something went wrong :0")
                })
            })
        }
    }


bot.connect();