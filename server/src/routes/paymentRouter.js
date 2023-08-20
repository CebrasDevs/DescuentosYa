const { Router } = require("express");
const { createOrder, handleFailure, handlePending, handleSuccess, receiveWebhook } = require("../controllers/paymentControllers/paymentControllerMP");
const { createPayment, paypalWebhook } = require("../controllers/paymentControllers/paymentControllerPayP");
const paymentRouter = Router();

//MercadoPago
paymentRouter.post("/create-order", createOrder);
paymentRouter.get("/success", handleSuccess);
paymentRouter.get("/failure", handleFailure);
paymentRouter.get("/pending", handlePending);
paymentRouter.post("/webhook/:id", receiveWebhook);

//PayPal
paymentRouter.post("/create-payment", createPayment);
paymentRouter.post("/paypal-webhook", paypalWebhook)

module.exports = paymentRouter;

