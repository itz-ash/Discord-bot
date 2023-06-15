const { REST, Routes } = require('discord.js');
const { config } = require("dotenv")
config();
const fs = require('node:fs');
const path = require('node:path');
const { Z_ASCII } = require('node:zlib');

//env
const token = process.env.DISCORD_BOT_TOKEN
const guildId = process.env.GUILD_ID
const clientId = process.env.CLIENT_ID




module.exports = async () => {
  const commands = [];
  const foldersPath = path.join(__dirname, 'commands');
  const commandFolders = fs.readdirSync(foldersPath);
  const rest = new REST().setToken(token);

  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      if ('data' in command && 'execute' in command) {
        commands.push(command.data.toJSON());
      } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
      }
    }
  }

  try {
    console.log(`Started refreshing ${commands.length} application (/) commands.`);

    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    // UNCOMMENT THE FOLLOWING CODE FOR GLOBAL COMMAND REGISTRATION

    // const data = await rest.put(
    //   Routes.applicationCommands(clientId),
    //   { body: commands },
    // );


    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    console.error(error);
  }
}
