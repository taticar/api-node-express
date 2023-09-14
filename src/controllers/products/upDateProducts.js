import product from '../../models/productModel.js';

const upDateProducts = async (req, res) => {
    try{
        const productData = req.body;
        const [result] = await product.upDateProducts(productData);
        if(result.affectedRows === 1){
            res.json({
                success: "Alterado", 
                product:{
                    ...productData
                    
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


export default upDateProducts;