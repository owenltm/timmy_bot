const diceroll = (interaction, args) => {

  let value = 1;
  // console.log(args.length);

  if(args.length == 0) {
    value = Math.floor(Math.random() * 6) + 1;
  } else {
    let n = args[0];

    for(let i = 0; i < n; i++){
      value += Math.floor(Math.random() * 6) + 1;
    }
  }

  interaction.reply(value);
}

module.exports = diceroll