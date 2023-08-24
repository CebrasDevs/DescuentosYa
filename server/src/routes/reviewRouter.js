const { Router } = require("express");
const  { postReviewHandler, updateReviewHandler }  = require("../handlers");
const reviewRouter = Router();
const {verifyToken} = require("../utils/authMiddleware");

reviewRouter.post("/", postReviewHandler);
reviewRouter.patch("/:id", updateReviewHandler);



module.exports = reviewRouter;