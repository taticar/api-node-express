import user from "../../models/userModel.js";

const getUser = async (req, res) => {
    try{
        const userData = req.body;
        const[rows, fields] = await user.getById(userData.id);
        if(rows.length === 0){
        res.status(404).json({
            erros:  `Usuário ${userData.id} não encontrado!`,
            user: rows[0]
        });
        }else {
        res.json({
            sucess: "Usuário encontrado com sucesso!",
            user: rows[0]
        });
        }
    }catch(error) {
        console.log(error)
        res.status(500).json({
            error:"Erro no servidor!"
        })
    }
    
};

export default getUser;