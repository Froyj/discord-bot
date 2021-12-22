require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = process.env.BOT_TOKEN;

client.once('ready', () => {
  console.log('Bot launched !');
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.channel.send('pouet');
  }
});

client.login(token);
