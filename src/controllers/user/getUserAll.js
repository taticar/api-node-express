import user from "../../models/userModel.js";

const getUserAll = async (req, res) => {
    try{
        const[rows] = await user.getAll();
        if(rows.length === 0){
        res.status(404).json({
            erros:  `Usuário(s) não encontrado(s)!`
        });
        }else {
        res.json({
            sucess: "Usuário(s) encontrado(s) com sucesso!",
            user: rows
        });
        }
    }catch(error) {
        console.log(error)
        res.status(500).json({
            error:"Erro no servidor!"
        })
    }
    
};

export default getUserAll;