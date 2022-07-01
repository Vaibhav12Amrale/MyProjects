const express = require("express");
const router = express.Router();
const operation = require("../Controller/usercontroller");


router.post("/signup", operation.signup);
router.post("/login", operation.login);

   


module.exports = router;