const Users = require("../../../models/Users");

async function GetUsers(req, res) {
  const { id,email } = req.query;

  try {
    let result = [];
    if (id) {
      await Users.findById(id).then((user) => {
        result = user;
      });
      return res.json({
        result,
      });
    }
    if (email) {
      await Users.findOne({email}).then((user) => {
        result = user;
      });
      return res.json({
        result,
      });
    }

    await Users.find().then((users) => {
      result = users;
    });

    return res.json({
      result,
    });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports = GetUsers;
