import db from '../database/db.js'


const create = async (idUser, token) => {
    return await db.query("INSERT INTO sessions (token, user_id ) VALUES (?, ?);", [idUser, token])
}

const remove = async (token) => {
    return await db.query("DELETE FROM sessions WHERE token = ?", [token])
}

export default {create, remove}