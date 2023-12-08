const db = require('../config/database.js');

async function connectionDB() {
  try {
    db()
    console.log('servidor conectado');
  } catch (error) {
    console.log(error);
  }
}

module.exports= {connectionDB}
