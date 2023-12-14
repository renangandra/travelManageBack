const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  // Tipos de arquivos permitidos
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Tipo de arquivo inválido'));
    }
  },

  // Pasta onde os arquivos serão salvos
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/uploads');
    },

    filename: (req, file, cb) => {
      cb(null, new Date().toISOString() + '-' + file.originalname);
    },
  }),
});

function useExpressApp(app) {
  app.use(upload.single('file'));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
  });
  app.use('/public', express.static(path.resolve('public')));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(routes);
}

module.exports = { useExpressApp };
