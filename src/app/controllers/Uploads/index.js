

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  })
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  })
}

async function Uploads(req, res) {
  const {path} = req.file;

  try {
    return res.json({
      message: 'Upload successfully',
      path: process.env.URLAPI + path
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports = Uploads;
