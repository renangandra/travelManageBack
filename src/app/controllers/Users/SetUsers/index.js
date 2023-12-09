const bcrypt = require('bcryptjs');

const Users = require('../../../models/Users');

async function SetUsers(req, res) {
  const { name, email, password, photo } = req.body;

  try {
    let passwordHash = '';

    console.log(password);
    if (!password) {
      return res.json({
        message: 'not found password',
      });
    }
    await bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        console.error('Error hashing password:', err);
        return;
      }

      passwordHash = hash;

      const User = await new Users({
        name,
        email,
        password: passwordHash,
        photo,
      });

      console.log(password);

      await User.save(User);
console.log(User);
      return res.json({
        message: 'User successfully created',
      });
    });

  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports = SetUsers;
