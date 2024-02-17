const express = require('express')
const router = express.Router()
const {resgisterUser,authUser ,allUsers} = require('../controllers/userControllers')
const{ protect }= require("../middleware/authMiddleware")

router.route('/').post(resgisterUser).get(protect,allUsers);
router.post('/login',authUser)


module.exports = router;