const express = require("express");
const router = express.Router();

const userController = require("../controllers/Api/V1/UserController");
const { userValidationRules } = require('../validation/Api/V1/UserValidation');

router.get("/user", (req, res) => {userController.get(req, res);});
router.post("/user/create", userValidationRules(), (req, res) => {userController.post(req, res);});
router.put("/user/update/:id", userValidationRules(), (req, res) => {userController.update(req, res);});
router.delete("/user/delete/:id", (req, res) => {userController.delete(req, res);});

module.exports = router;
