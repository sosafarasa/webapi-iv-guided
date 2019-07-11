const dotenv = require('dotenv');
dotenv.config();

const server = require('./api/server.js');

//make port dynamic by using .env

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
