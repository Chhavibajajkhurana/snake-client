const net = require('net');
const client = net.createConnection({ 
  port: 50542, 
  host: '135.23.223.133'
}, () => {
  console.log("multiplayer snek!");
})
//const name = 'cbk';

client.setEncoding('utf8');
client.write("Name: cbk");
//conn.write("Name: cbk");

client.on('data', (data) => {
  console.log("DATA CAME IN!!!!!");
  console.log(data);
})


// interpret incoming data as text
  


// Snek Server IP: 135.23.223.133
// Snek Port: 50542