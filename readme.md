# Discord Bot Boilerplate

This is a basic boilerplate for creating a Discord bot with support for buttons, select menus, and slash commands. The boilerplate automatically refreshes slash commands globally on restart.

## Prerequisites

Before using this boilerplate, make sure you have the following:

- [Node.js](https://nodejs.org) (v16 or higher)
- [Discord.js](https://discord.js.org) (v13 or higher)
- [dotenv](https://www.npmjs.com/package/dotenv) (v10 or higher)

## Getting Started

1. Clone or download this repository to your local machine.
2. Install the required dependencies by running the following command:

   ```shell
   npm install
   ```

3. Rename the .env.example file to .env and replace the placeholder values

4. In the .env file, define the following environment variables:

- DISCORD_BOT_TOKEN
- CLIENT_ID
- GUILD_ID

5. Create a subfolder named commands in the root directory of the project. This is where you'll organize your bot's commands.

- For example, you can create a subfolder named utils within the commands folder to store utility commands.

- Within the utils folder, you can create individual command files, such as examplecommand.js.
  <br>

  - ✅ The command file structure should be as follows:

  ```markdown
  commands
  └── utils
  └── examplecommand.js
  ```

  <br>

  - ❌ Incorrect: Creating command files directly in the commands directory without any subfolders.

  ```markdown
  commands
  └── examplecommand.js
  ```

## Usage

1. To use this boilerplate, follow these steps:

2. Create a new bot application on the [Discord Developer](https://discord.com/developers/applications) Portal.

3. Copy the bot token and paste it into the config.json file.

4. Set the desired prefix for your bot in the config.json file.

5. Implement your bot's functionality by modifying the index.js file. You can use the provided button and select menu examples as a starting point.

6. Customize the bot's behavior according to your needs.

7. Run the bot using the following command:

```shell
npm start
```

## Features

### Buttons

The boilerplate includes an example of how to create and handle button interactions. You can find the example in the **commands/exampleCommands/buttonExample.js** file. Buttons can be used to trigger specific actions or commands when clicked by users.

### Select menus

The boilerplate also includes an example of how to create and handle select menu interactions. You can find the example in the index.js**commands/exampleCommands/selectMenuExample.js** file. Select menus allow users to choose an option from a dropdown list.

### Slash commands

The boilerplate supports slash commands, which are a more user-friendly alternative to traditional bot commands. Slash commands can be executed directly from the Discord chat input.

### Automatic Slash Command Refresh

The boilerplate automatically refreshes the slash commands globally on bot restart. This ensures that the latest version of your slash commands is always available to users.

### Conributing

If you have suggestions or improvements for this boilerplate, feel free to submit a pull request or open an issue on the GitHub repository.
