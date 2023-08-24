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
router.delete("/", verifyToken, deleteCategoryHandler);
router.post("/", verifyToken, createCategoryHandler);
router.patch("/", verifyToken, updateCategoryHandler);

module.exports = router;
