require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const path = require("path")

const client = new Client({ intents: [IntentsBitField.Flags.Guilds] });

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, 'commands'),
  eventsPath: path.join(__dirname, "events"),
  validationsPath: path.join(__dirname, "validation"),
  testServer: '832946396725772308',
});

client.login(process.env.TOKEN);