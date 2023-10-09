const user = require("../../../models/user");
const { validationResult } = require("express-validator");

module.exports = {
  // Create a new user
  post: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
      }

      const { name, address, age } = req.body;

      const newUser = await user.create({ name, address, age });

      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Error creating user" });
    }
  },

  // Get all users
  get: async (req, res) => {
    try {
      const users = await user.findAll();

      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Error fetching users from db" });
    }
  },

  // Update user
  update: async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
      }

      const id = req.params.id;
      const { name, address, age } = req.body;

      const checkUser = await user.findByPk(id);

      if (!checkUser) {
        return res.status(404).json({ message: "User not found" });
      }

      await user.update({ name, address, age }, { where: { id } });

      res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Error updating user" });
    }
  },

  // Delete user
  delete: async (req, res) => {
    try {
      const userId = req.params.id;
      const checkUser = await user.findByPk(userId);

      if (!checkUser) {
        return res.status(404).json({ message: "User not found" });
      }

      await checkUser.destroy();

      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Error deleting user" });
    }
  },
};
