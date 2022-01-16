const DB = require('../config/data-base')

/**Obtem a lista de todos os contratos */
async function findAll() {
    try {
        const conn = await DB.connect();
        const [rows] = await conn.query('SELECT * FROM user;');
        return rows;

    } catch (e) {
        return 'Erro ao executar esta query.';
    }
}
module.exports = {
    findAll
}