import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

//verificar se usuário está logado
const auth = (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(400).json({
                error: `Faça o login!!`
            })
        }
        const userToken = jwt.verify(token, TOKEN_SECRET)
        //guardou informação se usuário logado sim ou não
        req.userLogged = userToken
        console.log(userToken)
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Erro ao verificar usuário!'
        })
    }
}


export default auth;