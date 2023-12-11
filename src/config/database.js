const { connect } = require("mongoose");

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}

async function main() {
  // Conecta-se ao MongoDB
  await connect(process.env.HOSTDATABASE);

  // Desconecta-se do MongoDB
  //await connection.close();
}

module.exports = main;
