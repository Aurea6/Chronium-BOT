const { GuessThePokemon } = require("weky");

module.exports = {
	name: "guesspokemon",
	description: "Guess the pokemon",
	run: async(client, message, args)=>{
		await GuessThePokemon({
			message: message,
			embed: {
				title: 'Guess The Pokémon',
				description:
					'**Type:**\n{{type}}\n\n**Abilities:**\n{{abilities}}\n\nYou only have **{{time}}** to guess the pokémon.',
				color: '#5865F2',
				footer: 'Chronium Games',
				timestamp: true
			},
			thinkMessage: 'I am thinking',
			othersMessage: 'Only <@{{author}}> can use the buttons!',
			winMessage:
				'GG, It was a **{{answer}}**. You got it correct in **{{time}}**.',
			loseMessage: 'Better luck next time! It was a **{{answer}}**.',
			time: 60000,
			incorrectMessage: "No {{author}}! The pokémon isn't `{{answer}}`",
			buttonText: 'Cancel'
		});
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