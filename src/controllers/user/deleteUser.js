import user from "../../models/userModel.js";


const deleteUser = async (req, res) => {
    try{
        const userData = req.body;
        const [result] = await user.deleteId(userData.id);
        if(result.affectedRows === 1){
            res.json({
                success: "Usuário deletado."
            })
        }

    }catch(error) {
        console.log(error)
        res.status(500).json({
            error:"Erro no servidor!"
        })
    
};
};

export default deleteUser;