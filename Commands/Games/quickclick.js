const { QuickClick } = require('weky')

const { MessageEmbed } = require("discord.js") 
module.exports = {
	name: 'qc',
  description: "First one to shoot wins!",
	aliases: ['quickclick'],
	run: async (client, message, args) => {

await QuickClick({
	message: message,
	embed: {
		title: 'Quick Click | Scarlet Development',
		color: '#5865F2',
        footer: '©️ Scarlet Development',
		timestamp: true
	},
	time: 60000,
	waitMessage: 'The buttons may appear anytime now!',
	startMessage:
		'First person to press the catgirl button will win. You have **{{time}}**!',
	winMessage: 'GG, <@{{winner}}> pressed the button in **{{time}} seconds**.',
	loseMessage: 'No one pressed the button in time. So, I dropped the game!',
	emoji: '<:catgirl:920258063703879700>',
	ongoingMessage:
		"A game is already runnning in <#{{channel}}>. You can't start a new one!"
});


          }}