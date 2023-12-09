const bcrypt = require('bcryptjs');

const Users = require('../../../models/Users');

async function UpdateUsers(req, res) {
  const { id } = req.params;
  const { name, email, password, photo } = req.body;

  try {
    let passwordHash = '';

    await bcrypt.genSalt(10, (err, salt) => {
       if (err) {
         console.error('Error generating salt:', err);
         return;
       }

       bcrypt.hash(password, salt, (err, hash) => {
         if (err) {
           console.error('Error hashing password:', err);
           return;
         }

         passwordHash = hash;
       });
     });


    const user = await Users.findByIdAndUpdate(id, { name, email, password: passwordHash, photo }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'Travel Tip not found' });
    }

    return res.json({
      message: 'User updated with success',
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports= UpdateUsers;
