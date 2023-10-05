const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/user", userController.get);
router.post("/user/create", userController.post);

module.exports = router;
