import user from '../../models/userModel.js';

const insertByUser = async (req, res) => {
    try{
        const userData = req.body;
        const [result] = await user.create(userData); 
        if(result.affectedRows === 1){
            res.json({
                success: "Usuário inserido com sucesso!", user:{
                    id: result.insertId,
                    ...userData
                }
            })
        }

    }catch(error) {
        console.log(error)
        res.status(500).json({
            error:"Erro no servidor!"
        })
    
};
}

export default insertByUser;