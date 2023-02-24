import dotenv from 'dotenv'
dotenv.config()
import { REST, Routes } from 'discord.js';

const commands = [
    {
        name: 'hi',
        description: 'hello'
    }
];

const rest = new REST({version: '10' }).setToken(process.env.TOKEN);

( async () => {
    try {
        console.log("registering slash commands");

        await rest.put(
            Routes.applicationGuildCommand(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ), 
            { body: commands }
        );
    } catch (error) {
        console.log(`there was error: ${error}`);
    }
})();