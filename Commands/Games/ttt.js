const { TicTacToe } = require('discord-gamecord')

module.exports = {
	name: 'tictactoe',
  description: "First one to shoot wins!",
	aliases: ['ttt'],
	run: async (client, message, args) => {

new TicTacToe({
  message: message,
  slash_command: false,
  opponent: message.mentions.users.first(),
  embed: {
    title: 'Tic Tac Toe',
    overTitle: 'Game Over',
    color: '#5865F2',
  },
  oEmoji: '920545738239381525',
  xEmoji: '920545607037382696',
  blankEmoji: '➖',
  oColor: 'PRIMARY',
  xColor: 'DANGER',
  waitMessage: 'Waiting for the opponent...',
  turnMessage: '{emoji} | Its now **{player}** turn!',
  askMessage: 'Hey {opponent}, {challenger} challenged you for a game of Tic Tac Toe!',
  cancelMessage: 'Looks like they refused to have a game of Tic Tac Toe. \:(',
  timeEndMessage: 'Since the opponent didnt answer, i dropped the game!',
  drawMessage: 'It was a draw!',
  winMessage: '{emoji} | **{winner}** won the game!',
  gameEndMessage: 'The game went unfinished :(',
}).startGame();

        }}