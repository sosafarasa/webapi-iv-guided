const dotenv = require('dotenv');
dotenv.config();

const server = require('./api/server.js');

//make port dynamic by using .env
//.env makes the port dynamic + can be used to add security if we add a password

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
