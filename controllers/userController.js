const user = require("../models/user");

module.exports = {
  // Create a new user
  post: async (req, res) => {
    try {
      const { name, address, age } = req.body;
      const newUser = await user.create({ name, address, age });
      res.status(201).json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Error creating user" });
    }
  },

  // Get all users
  get: async (req, res) => {
    try {
      const users = await user.findAll();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Error fetching users from db" });
    }
  },
};
