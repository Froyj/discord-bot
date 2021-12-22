require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = process.env.BOT_TOKEN;
import randomQuote from './Geoffroy/quotes';

client.once('ready', () => {
  console.log('Bot launched !');
});

client.on('messageCreate', (message) => {
  if (message.content === '!ping') {
    message.channel.send('pouet');
  }
  if (message.content === '!geoffroy') {
    message.channel.send(randomQuote());
  }
});

client.login(token);
