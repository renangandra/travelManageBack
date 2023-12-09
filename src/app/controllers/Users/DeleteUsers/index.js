const Users = require("../../../models/Users");

async function DeleteUsers(req, res) {
  const { id } = req.params;

  try {

    const users = await Users.findByIdAndDelete(id);

    if (!users) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'User deleted' });

  } catch (err) {

    return res.status(400).json({ message: err.message });
  }
}

module.exports= DeleteUsers;
