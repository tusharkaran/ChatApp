const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();
 console.log("Message Roustes 2");
router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);


module.exports = router;    