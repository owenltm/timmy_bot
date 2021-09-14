const rockpaperscissors = (message, args) => {

  const options = ['rock', 'paper', 'scissors'];
  const rndm = Math.floor(Math.random() * 3);

  // console.log(args[0]);
  const input = args[0];
  var result = "";

  if(options.includes(input)){
    var player = options.indexOf(input);

    if(player === rndm){
      result = "draw";
    } else if(player < rndm){
      result = "hoorayy, Timmy win";
    } else if(player > rndm){
      result = "I lost :( i beat you next time";
    }

    message.channel.send(`**${options[rndm]}** - ${result}`);
  } else {
    // invalid move
    message.channel.send("Invalid moves");
  }
}

module.exports = rockpaperscissors;