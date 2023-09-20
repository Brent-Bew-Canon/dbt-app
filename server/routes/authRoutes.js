const { Signup } = require("../controllers/authController.js");
const router = require("express").Router();

router.route('/').post(Signup);

module.exports = router;