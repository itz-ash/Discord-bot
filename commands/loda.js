const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('loda')
    .setDescription('cut your lodas'),
  run: ({ interaction }) => {
    interaction.reply(`i will cut you lodas, ${interaction.user.username} 😈😈😈 and Obliterate this hell named as ${interaction.member.guild.name}💣🧌👹`)

  },
}