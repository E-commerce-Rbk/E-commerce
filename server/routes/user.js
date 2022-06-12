import express from 'express';
import { signup, login,getOneUserById ,edit } from '../controllers/user.js';

const router=express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.get("/:_id", getOneUserById);
router.patch('/:_id',edit)

export default router;