const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../../../models/Users');

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development',
  });
} else {
  require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
  });
}

async function Login(req, res) {
  const { email, password } = req.body;

  console.log(password);

  try {
    let result = [];

    await Users.findOne({ email }).then((user) => {
      console.log(user, 'user');
      if (typeof user === 'object' && user !== null && user) {
        user = [user];
      }
      if (user===null) {
        user = [];
      }

      if (user.length == 0) {
        result = { message: 'Email or password incorrect' };
        return res.json({
          result
        });
      }

      console.log(user[0]?.password, password);

      bcrypt.compare(password, user[0]?.password ? user[0].password : 'useer', (err, isMatch) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          return res.json({
            message: err,
          });
        }

        if (isMatch) {
          const secret = process.env.APP_SECRET;
          const payload = {
            name: user[0].name,
            email: user[0].email,
          };

          const token = jwt.sign(payload, secret, {
            algorithm: 'HS256',
          });
          result = { token, user };
        } else {
          result = { message: 'Email or password incorrect' };
        }
        return res.json({
          result,
        });
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
}

module.exports = Login;
