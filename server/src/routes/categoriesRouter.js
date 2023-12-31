const {
  getCategoriesHandler,
  deleteCategoryHandler,
  createCategoryHandler,
  updateCategoryHandler,
} = require("../handlers");

const { Router } = require("express");
const router = Router();
const {verifyToken} = require("../utils/authMiddleware");

router.get("/", getCategoriesHandler);
router.delete("/", deleteCategoryHandler);
router.post("/", createCategoryHandler);
router.patch("/", updateCategoryHandler);

module.exports = router;
