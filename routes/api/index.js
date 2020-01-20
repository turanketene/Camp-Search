const router = require("express").Router();
const favoritesRoutes = require("./favorites");
<<<<<<< HEAD
const createuserRoutes = require("./creatuser")
=======
const createuserRoutes = require("./creatuser");
>>>>>>> master

router.use("/favorites", favoritesRoutes);

router.use("/createusers", createuserRoutes);

module.exports = router;
