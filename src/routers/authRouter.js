import express from 'express';

// controller auth

import getAuth from '../controllers/auth/getAuth.js';
import insertAuth from '../controllers/auth/insertAuth.js';

const router = express.Router();

router.get('/login', getAuth);

router.post('/logado', insertAuth);

export default router;