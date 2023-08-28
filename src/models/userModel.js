import db from '../database/db.js';

const getById = async (id) => {
    return await db.query('SELECT name, email FROM users WHERE id = ?', [id])
}
const insertByUser = async (name, email) => {
    return await db.query('INSERT INTO users (name, email, password) VALUES (? , ?, ?)', [name, email, password] )
}

export default {getById, insertByUser};