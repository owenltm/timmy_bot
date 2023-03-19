// ENTRY POINT
require('dotenv').config();

const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const timmy = require("./timmy");
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.commands = new Collection();

client.once(Events.ClientReady, () => {
  console.log(`${client.user.tag} has logged in`);

  client.user.setActivity('T-help', { type: ActivityType.Playing })

  Object.keys(timmy).forEach(key => {
    client.commands.set(timmy[key].data.name, timmy[key].fun);
  });
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		return;
	}

	try {
		await command(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

// Connect to discord
client.login(process.env.DISCORDJS_BOT_TOKEN);