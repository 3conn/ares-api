async function connect(){

    try{

        require('dotenv-safe').config()
    
        db_user = process.env.DB_USERNAME;
        db_password = process.env.DB_PASSWORD;
        db_server = process.env.DB_URL;
        db_port = process.env.DB_PORT;
        db_url = process.env.DB_DATABASE_NAME;
    
        console.log('Conectando ao banco de dados...')
        if (global.connection && global.connection.state !== 'disconnected')
            return global.connection;
    
        const mysql = require("mysql2/promise");
        const connection = await mysql.createConnection(`mysql://${db_user}:${db_password}@${db_server}:${db_port}/${db_url}`);
        
        global.connection = connection;
    
        return connection;

    }catch(e){
        return 'Erro ao tentar conectar ao banco de dados.';
    }
}

module.exports = {connect}