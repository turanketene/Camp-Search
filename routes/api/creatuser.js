const router = require("express").Router();
const userControllers = require("../../controllers/userControllers");

// Matches with "/api/createusers"
<<<<<<< HEAD
router.route("/")
  .post(userControllers.create);

=======
router.route("/").post(userControllers.create);
>>>>>>> master

module.exports = router;
