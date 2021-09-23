const setupInput = function() {
  let connection;
  
  const setupInput = function(client) {
    connection = client;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', key => {
      handleUserInput(key);
    });
    return stdin;
  };
  const handleUserInput = (key) => {
    const stdout = process.stdout;
    if (key === '\u0003') {
      stdout.write("Exited snek game. Bye bye.\n");
      process.exit();
    }
    if (key === 'y') {
      connection.write("Move: up");
    }
    if (key === 'g') {
      connection.write("Move: left");
    }
    if (key === 'h') {
      connection.write("Move: down");
    }
    if (key === 'b') {
      connection.write("Move: right");
    }
  };
  
  module.exports = {setupInput}