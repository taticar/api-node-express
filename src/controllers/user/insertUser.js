import insert from '../../models/userModel';

const insertByUser = async (req, res) => {
    const userData = req.body;
    const [rows, fields] = await insert.insertByUser(userData.name, userData.email, userData.password); 
    res.json({message: "metódo post"});
};

export default insertUser;

// const getUser = async (req, res) => {
//     const userData = req.body;
//     const[rows, fields] = await user.getById(userData.id);
//     res.json({
//         sucess: "Usuário encontrado com sucesso!",
//         user: rows[0]
//     });
// };