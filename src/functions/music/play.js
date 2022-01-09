const fs = require('fs')
const ytdl = require('ytdl-core');

const play = async (message, args) => {
  if (!message.guild) return;

  if (message.member.voice.channel) {
    console.log("joining");
    const connection = await message.member.voice.channel.join();

    console.log("playing");
    const dispatcher = connection.play(ytdl(args[0], { filter: 'audioonly' }));;
    /* const dispatcher = connection.play(fs.createReadStream(args[0]), {
      type: 'webm/opus',
    }); */

    dispatcher.on('finish', () => {
      console.log('Finished playing!');
    });

  } else {
    message.reply('You need to join a voice channel first!');
  }
}

module.exports = play