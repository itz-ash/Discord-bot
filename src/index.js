import dotenv from 'dotenv'
dotenv.config()

import { Client, IntentsBitField } from 'discord.js';

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});


client.on('ready' , (c) => {
    console.log("it is ready")
    })
    
client.login(process.env.TOKEN);