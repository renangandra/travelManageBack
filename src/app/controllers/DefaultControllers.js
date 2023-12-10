const version = require('project-version');

async function index(req, res) {
  try {
   return res.json({ version });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports= index;
