const {
    createUsersHandler,
    updateUsersHandler,
    getUsersHandler
} = require("../handlers");

const { Router } = require("express");
const router = Router();

router.post("/", createUsersHandler);
router.patch("/:id", updateUsersHandler);
router.get("/", getUsersHandler);

module.exports = router;
