const flipacoin = (message) => {
  const random = (Math.random() * 10) % 2;

  const result = random == 0 ? "head" : "tails";

  // message.reply(`${message.member} ${result}`);
  message.channel.send(`${message.member} ${result}`);
};

module.exports = flipacoin;