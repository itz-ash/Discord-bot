const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('button-example')
    .setDescription('This is an example command that shows buttons.'),

  async execute(interaction) {
    // Create buttons
    const button1 = new ButtonBuilder()
      .setCustomId('button1')
      .setLabel('Danger')
      .setStyle(ButtonStyle.Danger);

    const button2 = new ButtonBuilder()
      .setCustomId('button2')
      .setLabel('Primary')
      .setStyle(ButtonStyle.Primary);

    const button3 = new ButtonBuilder()
      .setCustomId('button3')
      .setLabel('Secondary')
      .setStyle(ButtonStyle.Secondary);

    const button4 = new ButtonBuilder()
      .setLabel('Link')
      .setURL('https://youtu.be/dQw4w9WgXcQ')
      .setStyle(ButtonStyle.Link);

    // Create the first row of buttons
    const row = () => new ActionRowBuilder()
      .addComponents(button1, button2, button3, button4);

    // Create the second row of buttons with disabled buttons
    const row2 = () => new ActionRowBuilder()
      .addComponents(button1.setDisabled(true), button2.setDisabled(true), button3.setDisabled(true), button4);

    // Send the initial message with buttons
    const response = await interaction.reply({
      content: 'Want some cookies 🍪?',
      components: [row()],
    });

    // Filter to ensure only the user who triggered the command can interact with the buttons
    const collectorFilter = i => i.user.id === interaction.user.id;

    try {
      // Await button interaction for a specified time
      const button = await response.awaitMessageComponent({ filter: collectorFilter, time: 6000 });

      if (button.customId === 'button1') {
        // If button1 is clicked
        await button.reply({ content: 'Have some cookie 🍪🍪🍪', components: [] });
        await interaction.editReply({ content: 'Want some cookies 🍪?', components: [row2()] });
      } else if (button.customId === 'button2') {
        // If button2 is clicked
        await button.reply({ content: 'Oops! I dropped my cookies 🍪🍪', components: [] });
        await interaction.editReply({ content: 'Want some cookies 🍪?', components: [row2()] });
      } else if (button.customId === 'button3') {
        // If button3 is clicked
        await button.reply({ content: 'You don\'t deserve cookies 🗿', components: [] });
        await interaction.editReply({ content: 'Want some cookies 🍪?', components: [row2()] });
      }
    } catch (e) {
      // Handle if no button is clicked within the specified time
      await interaction.editReply({ content: 'Cookies?', components: [] });
    }
  },
};
