const express =require('express');
const {useExpressApp} =require('./useApp');
const {connectionDB} =require('./database/index');

const app = express();

function server() {
  useExpressApp(app);
  connectionDB();

  app.listen(80, () => {
    console.log('servidor rodando');
  });
}

module.exports={server, app}
