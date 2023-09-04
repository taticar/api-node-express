import db from '../database/db.js';

const getProducts = async (code) => {
    return await db.query('SELECT name, description, qtde, vality, price FROM products WHERE code = ?', [code])
}
const getProductsAll = async () => {
    return await db.query('SELECT id, name, email FROM products')
}
const insertProducts = async (code) => {
    const {name, description, qtde, vality, price} = products
    return await db.query('INSERT INTO products (name, description, qtde, vality, price) VALUES (? , ?, ?, ?, ?)', [name, description, qtde, vality, price] )
}
const upDateProducts = async (products) => {
    const {code, name, description, qtde, vality, price} = products
    return await db.query('UPDATE products SET name = ?, description = ?, qtde = ?, vality = ?, price = ?   WHERE code = ?', [name, description, qtde, vality, price, code])
}
const deleteProducts = async (code) => {
    return await db.query('DELETE FROM products WHERE code = ?', [code])
}

export default {getProducts, getProductsAll, insertProducts, upDateProducts, deleteProducts};