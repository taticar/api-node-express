import express from 'express';

// controllers/user
import getUser from '../controllers/user/getUser.js';
import getUserAll from '../controllers/user/getUserAll.js';
import insertUser from '../controllers/user/insertUser.js';
import upDateUser from '../controllers/user/upDateUser.js';
import deleteUser from '../controllers/user/deleteUser.js';
//middleware auth
import auth from '../middlewares/auth.js';


const router = express.Router();

router.get('/', getUser);
router.get('/list', getUserAll);
router.post('/', insertUser);
// middleware auth executado antes da função principal
router.put('/', auth, upDateUser);
router.delete('/', auth, deleteUser );

export default router;