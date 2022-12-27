import express, {} from "express"
import authController from '../controllers/auth-controller'
const am = require("../middlewares/async-middleware");
const router = express.Router()

router.all('/register',am(authController.register))
router.post('/login',am(authController.login))
router.post('/verify',authController.login)
router.post('/forgot',authController.login)
router.post('/reset',authController.login)
router.post('/resend',authController.login)
router.all('/logout',authController.login)
router.all('/logouts',authController.login)

export default router;