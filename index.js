require('dotenv/config');
config();
const { Client, IntentsBitField } = require('discord.js');
const { config } = require('dotenv');

const client = new Client({ intents: [IntentsBitField.Flags.Guilds] });

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}`)
});

client.login(process.env.TOKEN);