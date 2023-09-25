import db from '../database/db.js';

const getById = async (id) => {
    return await db.query('SELECT name, email, photo FROM users WHERE id = ?', [id])
}
const getAll = async () => {
    return await db.query('SELECT id, name, email, photo FROM users')
}
const create = async (user) => {
    const {name, email, pass} = user
    return await db.query('INSERT INTO users (name, email, password, photo) VALUES (? , ?, ?, ?)', [name, email, password, photo] )
}
const upDateId = async (user) => {
    const {id, name, email, pass, photo} = user
    return await db.query('UPDATE users SET name = ?, email = ?, password = ?, photo = ?   WHERE id = ?', [name, email, password, id, photo])
}
const deleteId = async (id) => {
    return await db.query('DELETE FROM users WHERE id = ?', [id])
}

export default {getById, getAll, create, upDateId, deleteId};