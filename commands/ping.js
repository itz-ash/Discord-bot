const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('ping cmnd'),
  run: ({ interaction }) => {
    interaction.reply('hi');
  },
  devOnly: true
}