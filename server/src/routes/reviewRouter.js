const { Router } = require("express");
const  { postReviewHandler, updateReviewHandler }  = require("../handlers");
const reviewRouter = Router();
const {verifyToken} = require("../utils/authMiddleware");

reviewRouter.post("/", verifyToken, postReviewHandler);
reviewRouter.patch("/:id", verifyToken, updateReviewHandler);



module.exports = reviewRouter;