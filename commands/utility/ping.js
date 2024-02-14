const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};


// const { SlashCommandBuilder } = require('discord.js');


// module.exports = {
//     cooldown: 5,
//     data: new SlashCommandBuilder()
//         .setName('ping')
//         .setDescription('Replies with Pong!'),
//     async execute(interaction) {
//         await interaction.reply('Pong!');
//     }
// }