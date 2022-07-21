const { Message, Client, MessageActionRow, MessageButton, MessageEmbed, MessageAttachment } = require("discord.js");
const fetch = require('axios')

module.exports = {
    name: 'activity',
    description : "Do activitys in discord.",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const channel = message.member.voice.channel
        if(channel) {
          if(!args[0]) return message.reply({ embeds: [
            new MessageEmbed()
              .setTitle("Activity")
              .setDescription("Here is a list of options!\n```\nyoutube-old\nyoutube-dev\nyoutube\nchess\nchess-dev\nbetrayal\nfishing\npoker\nscrabble\ncrossword\ndrawing```")
              .setColor("RANDOM")
          ]});
          const query = args[0].toLowerCase();
          if(query === "youtube-old") {
            return ActivityFetch("755600276941176913", channel, "870909668090851399", "Youtube Together (old)", "RED", "Click the button below to watch youtube (old) in vc", client, message);
          } else if(query === "youtube-dev") {
            return ActivityFetch("880218832743055411", channel, "870909668090851399", "Youtube Together (dev)", "RED", "Click the button below to watch youtube (dev) in vc", client, message);
          } else if(query === "youtube") {
            return ActivityFetch("880218394199220334", channel, "870909668090851399", "Youtube Together", "RED", "Click the button below to watch youtube in vc", client, message);
          } else if(query === "chess") {
            return ActivityFetch("832012774040141894", channel, "♟️", "Chess In The Park", "WHITE", "Click the button below to play chess in vc", client, message);
          } else if(query === "chess-dev") {
            return ActivityFetch("832012586023256104", channel, "♟️", "Chess In The Park (dev)", "WHITE", "Click the button below to play chess (dev) in vc", client, message);
          } else if(query === "betrayal") {
            return ActivityFetch("773336526917861400", channel, "🤫", "Betrayal.io", "BLUE", "Click the button below to play betrayal (amoug us clone) in vc", client, message);
          } else if(query === "fishing") {
            return ActivityFetch("814288819477020702", channel, "🐟", "Fishington", "#55acee", "Click the button below to play fishington in vc", client, message);
          } else if(query === "poker") {
            return ActivityFetch("755827207812677713", channel, "♠️", "Poker Night", "WHITE", "Click the button below to play poker in vc", client, message);
          } else if(query === "scrabble") {
            return ActivityFetch("879863686565621790", channel, "🎲", "Letter Tile", "#a46df9", "Click the button below to play scrabble in vc", client, message);
          } else if(query === "crossword") {
            return ActivityFetch("879863976006127627", channel, "📰", "Word Snacks", "#b9ffb7", "Click the button below to play crossword in vc", client, message);
          } else if(query === "drawing") {
            return ActivityFetch("878067389634314250", channel, "🖊️", "Doodle Crew", "#fdc25d", "Click the button below to play drawing in vc", client, message);
          } else return message.reply({ embeds: [
            new MessageEmbed()
              .setTitle("Activity")
              .setDescription("Here is a list of options!\n```\nyoutube-old\nyoutube-dev\nyoutube\nchess\nchess-dev\nbetrayal\nfishing\npoker\nscrabble\ncrossword\ndrawing```")
              .setColor("RANDOM")
          ]});
        } else {
          return message.channel.send({ embeds: [
            new MessageEmbed()
                .setTitle("You must be connected to a voice channel to use this command!")
                .setColor("#202225")
          ]});
        }
    },
};

async function ActivityFetch(code, channel, emoji, name, color, description, client, message) {
    fetch({
        method: "post",
        url: `https://discord.com/api/v8/channels/${channel.id}/invites`,
        data: {
            max_age: 86400,
            max_uses: 0,
            target_application_id: code,
            target_type: 2,
            temporary: false,
            validate: null
        },
        headers: {
            "Authorization": `Bot ${client.token}`,
            "Content-Type": "application/json"
        }
    }).then(invite => {
        if (!invite.data.code) return message.channel.send({
            embeds: [
                new MessageEmbed()
                .setTitle("I was unable to start the Activity session!")
                .setColor(color)
            ]
        });

        message.channel.send({
            embeds: [new MessageEmbed()
                .setTitle(name)
                .setDescription(description)
                .setColor(color)
            ],
            components: [new MessageActionRow().addComponents(
                new MessageButton()
                .setStyle("LINK")
                .setLabel(name)
                .setEmoji(emoji)
                .setURL(`https://discord.com/invite/${invite.data.code}`)
            )]
        });
    });
}
