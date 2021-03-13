const express = require("express");

const router = express.Router();

const Admin = require("../Controller/controller");

router.post("/api/adminLogin",Admin.createAdmin);

module.exports = router;