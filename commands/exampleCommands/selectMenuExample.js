const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder, ComponentType, Events } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('select-menu-example')
    .setDescription('This is an example command that shows buttons.'),

  async execute(interaction) {
    const select = new StringSelectMenuBuilder()
      .setCustomId('starter')
      .setPlaceholder('Make a selection!')
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel('Cookie 🍪')
          .setDescription('Cookie from the outer space.')
          .setValue('cookie'),
        new StringSelectMenuOptionBuilder()
          .setLabel('Croissant 🥐')
          .setDescription('Croissant from the france')
          .setValue('croissant'),
        new StringSelectMenuOptionBuilder()
          .setLabel('BoBa 🧋')
          .setDescription('Boba from my icecream machine')
          .setValue('boba'),

      );

    const row = new ActionRowBuilder()
      .addComponents(select);

    const response = await interaction.reply({
      content: 'Choose your item!',
      components: [row],
    });


    const collector = response.createMessageComponentCollector({ componentType: ComponentType.StringSelect, time: 3_600_000 });

    collector.on('collect', async i => {
      const selection = i.values[0];
      if (selection === "cookie") {
        await i.reply(`Here is your cookie 🍪!`);

      } else if (selection === "croissant") {
        await i.reply(`Take your cwoswan.. crosant?.. croissant 🥐`);

      } else if (selection === "boba") {
        await i.reply(`Boba you need, Boba you get 🧋`);
      }
    });

  }
}
