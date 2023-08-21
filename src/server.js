//const express = require('express');
import express from 'express';
import userRouter from './routers/userRoute.js';
import productRouter from './routers/productRouter.js';
import authRouter from './routers/authRouter.js';

const api = express();


api.get('/', (req, res) => {
    res.json({message: "Bem vindo a nossa api"});
});

api.use('/user', userRouter);

api.use('/product', productRouter);

api.use('/auth', authRouter);



api.listen(3000, ()=> {
    console.log('Servidor rodando na porta 3000! http://localhost:3000');
});