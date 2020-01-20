const router = require("express").Router();
const favoritesController = require("../../controllers/favoritesControllers");

// Matches with "/api/favorites"
<<<<<<< HEAD
router.route("")
=======
router
  .route("")
>>>>>>> master
  .get(favoritesController.findAll)
  .post(favoritesController.create);

// Matches with "/api/favorites/:id"
<<<<<<< HEAD
router.route("/:id")
  .delete(favoritesController.remove);
=======
router.route("/:id").delete(favoritesController.remove);
>>>>>>> master

module.exports = router;
