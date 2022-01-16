const DB = require('../config/data-base')
const moment = require('moment');

let USER_ID = require('../services/auth-service').getUserId();
const TABLE = 'partner';

/**Obtem a lista de todos os contratos */
async function findAll() {
    try {
        const conn = await DB.connect();
        const [rows] = await conn.query('SELECT * FROM partner;');
        return rows;

    } catch (e) {
        return 'Erro ao executar esta query.';
    }
}
/** Cria um novo registro */
async function create(item) {
    const id = require('uuid').v1().toUpperCase();

    item.created = moment().format('YYYY-MM-DD hh:mm:ss');
    
    item.createdby = await USER_ID;
    //const VALUES = `"${id}", "${item.name}", "${item.contract}", "${item.email}", "${item.address}", "${item.city}", "${item.created}", "${item.createdby}"`;
    const VALUES = [id, item.name, item.contract, item.email, item.address, item.city, item.created, item.createdby];

    try {
        const conn = await DB.connect();
        //await conn.query(`INSERT INTO ${TABLE}(id, name, contact, email, address, city, created, createdby) VALUES(${VALUES});`)
        await conn.query(`INSERT INTO ${TABLE}(id, name, contact, email, address, city, created, createdby) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`, VALUES)
        
        return findbyid(id);
    } catch (e) {
        return e;
    }
}
/**Busca o item baseado no ID*/
async function findbyid(id) {
    try {
        const conn = await DB.connect();
        const [rows] = await conn.query(`SELECT * FROM partner where id="${id}";`);
        return rows;

    } catch (e) {
        return e;
    }
}
/**Atualiza o item baseado no ID*/
async function updatebyid(id, item) {

    try {
        item.updated = moment().format('YYYY-MM-DD hh:mm:ss');

        item.updatedby = await USER_ID;

        const VALUES = [item.name, item.contract, item.email, item.address, item.city, item.updated, item.updatedby, id];
        console.log(VALUES);
        
        const conn = await DB.connect();
        const sql = `UPDATE ${TABLE} SET name=?, contact=?, email=?, address=?, city=?, updated=?, updatedby=? where id="${id}";`;
        console.log(id, item)
        await conn.query(sql, VALUES);
        return findbyid(id);

    } catch (e) {
        return e;
    }
}
module.exports = {
    findAll, findbyid, create, updatebyid
}