require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'embed'){
    const embed = new EmbedBuilder()
    .setDescription('loda')
    .setColor('Random')
    .setTitle('this is embed');

    interaction.reply({ embeds: [embed] })
  }
});

client.login(process.env.TOKEN);