import db from '../database/db.js';

const getById = async (id) => {
    return await db.query('SELECT name, email FROM users WHERE id = ?', [id])
}
const create = async (user) => {
    const {name, email, pass} = user
    return await db.query('INSERT INTO users (name, email, password) VALUES (? , ?, ?)', [name, email, password] )
}
const upDateId = async (user) => {
    const {id, name, email, pass} = user
    return await db.query('UPDATE users SET name = ?, email = ?, password = ?   WHERE id = ?', [name, email, password, id])
}
const deleteId = async (id) => {
    return await db.query('DELETE FROM users WHERE id = ?', [id])
}

export default {getById, create, upDateId, deleteId};