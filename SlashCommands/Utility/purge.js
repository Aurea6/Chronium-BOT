module.exports = {
    name: "purge",
    description: "purge",
     botPerms: ["MANAGE_MESSAGES"],
    userPerms: ["MANAGE_MESSAGES"],
   options: [
                {
                    name: 'number',
                    description: '1-100',
                    type: "INTEGER"
                }
            ],
             run: async(client, interaction, args) => {
       const msgnum = interaction.options.getInteger('number')
       interaction.reply('Purging...');
       interaction.channel.bulkDelete(msgnum);
    interaction.channel.send("Done,If you wish you can delete this");
  }
}
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */