import user from '../../models/userModel.js';

const upDateUser = async (req, res) => {
    try{
        const userData = req.body;
        const [result] = await user.update(userData);
        if(result.affectedRows === 1){
            res.json({
                success: "Alterado", 
                User:{
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

export default upDateUser;