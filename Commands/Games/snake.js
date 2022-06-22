const Discord = module.require("discord.js");
const { Snake } = require("discord-gamecord")

module.exports = {
  name: "snake",
  description: "snake in discord!",
  run: async (client, message, args) => {
          new Snake({
        message: message,
        embed: {
        title: 'Snake Game',
        color: '#5865F2',
        OverTitle: "Game Over",
        },
        snake: { head: '🟢', body: '🟩', tail: '🟢' },
        emojis: {
          board: '⬛',
          food: '🍎',
          up: '⬆️',
          right: '➡️',
          down: '⬇️',
          left: '⬅️',
        },
        othersMessage: 'You are not allowed to use buttons for this message!',
      }).startGame();
  },
};
/**
 * @INFO
 * Bot Coded by iRed#1330 | https://github.com/iRed-Github/Chronium-BOT
 * @INFO
 * Join iDK Development | https://dsc.gg/idk-development
 * @INFO
 * Please mention Her / iDK Development, when using this Code!
 * @INFO
 */