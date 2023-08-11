const { Router } = require("express");
const {createOrder, handleFailure, handlePending, handleSuccess, receiveWebhook} = require("../controllers/paymentController");

const paymentRouter = Router();

paymentRouter.post("/create-order", createOrder);
paymentRouter.get("/success", handleSuccess);
paymentRouter.get("/failure", handleFailure);
paymentRouter.get("/pending", handlePending);
paymentRouter.post("/webhook", receiveWebhook);

module.exports = paymentRouter;

