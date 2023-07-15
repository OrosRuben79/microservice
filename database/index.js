const server = require("./src/server");
const port = 8004  ;

// const  { Character, Film } = require('./src/database');

// Film.list().then((res) => console.log(res));



server.listen(port, () => {
  console.log("Server listening at ", port);  
});
