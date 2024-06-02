var express = require('express');
var router = express.Router();

const { addNewUser } = require("../services/userService");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/** POST new user */
router.post("/", function (req, res, next) {
  const newUser = req.body.userName;

  addNewUser(newUser);

  res.status(201).send("request handled");
});

module.exports = router;
