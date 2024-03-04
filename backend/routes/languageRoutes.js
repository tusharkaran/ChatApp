const express = require('express')

const {
    ChangeMessage,
} = require("../controllers/messageControllers");
const router = express.Router()

router.route("/").get(ChangeMessage);




module.exports = router;