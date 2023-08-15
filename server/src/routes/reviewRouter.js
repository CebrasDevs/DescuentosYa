const { Router } = require("express");
const  { postReviewHandler }  = require("../handlers");
const reviewRouter = Router();

reviewRouter.post("/", postReviewHandler);



module.exports = reviewRouter;