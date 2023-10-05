const { body } = require("express-validator");

const userValidationRules = () => {
  return [
    // Validate name
    body("name")
      .notEmpty()
      .isLength({ min: 3, max: 20 })
      .withMessage("Name must be between 3 and 20 characters"),

    // Validate address
    body("address")
      .notEmpty()
      .isLength({ min: 3, max: 100 })
      .withMessage("Address must be between 3 and 20 characters"),

    // Validate age
    body("age")
      .notEmpty()
      .isLength({ min: 1 })
      .withMessage("Age must be at least 1 characters"),
  ];
};

module.exports = {
  userValidationRules,
};
