import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mensage: "Bem-vindo a nossa API"});
});

router.post('/', (req, res) => {
    res.json({message: "metódo post"});
});

router.put('/', (req, res) => {
    res.json({message: "metódo put"});
});

router.delete('/', (req, res) => {
    res.json({message: "metódo delete"});
});

export default router;