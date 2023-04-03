module.exports = (interaction, commandObj) => {
  const id = "76637437960034715"
  if (commandObj.devOnly) {
    if (interaction.member.id !== '766374379600347156') {
      interaction.reply(`This command can only be executed by ${id}`)
      return true;
    }
  }
}