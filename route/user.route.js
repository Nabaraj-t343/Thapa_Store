import { Router } from 'express'
import {  loginController, logoutController,registerUsercontroller, verifyEmailcontroller } from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/register', registerUsercontroller);
userRouter.post('/verify-email',verifyEmailcontroller)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)

export default userRouter

