const { Router } = require("express");
const { createOrder, handleFailure, handlePending, handleSuccess, receiveWebhook } = require("../controllers/paymentControllers/paymentControllerMP");
const { createPayment, paypalWebhook } = require("../controllers/paymentControllers/paymentControllerPayP");
const paymentRouter = Router();
const {verifyToken} = require("../utils/authMiddleware");

//MercadoPago
paymentRouter.post("/create-order", verifyToken, createOrder);
paymentRouter.get("/success", verifyToken, handleSuccess);
paymentRouter.get("/failure", verifyToken, handleFailure);
paymentRouter.get("/pending", verifyToken, handlePending);
paymentRouter.post("/webhook/:id", verifyToken, receiveWebhook);

//PayPal
paymentRouter.post("/create-payment", verifyToken, createPayment);
paymentRouter.post("/paypal-webhook", verifyToken, paypalWebhook)

module.exports = paymentRouter;

