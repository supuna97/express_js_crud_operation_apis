const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/user", userController.get);
router.post("/user/create", userController.post);
router.put("/user/update/:id", userController.update);
router.delete("/user/delete/:id", userController.delete);

module.exports = router;
