import express from 'express';
const router = express.Router();


import {register,login,updateUser}  from '../controllers/authController.js'
import auth  from '../middleware/auth.js'

router.post('/register', register)
router.post('/login', login)
router.patch('/updateUser', auth, updateUser)



export default router;