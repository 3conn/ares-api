const md5 = require('md5');

function md5generate(password){
    return md5(password);
}
function tokenGenerate(usuario){
    let tk = Buffer.from(usuario.id).toString('base64');
    let data = new Date();

    return md5(`${usuario.id}.${'123433f'}.${data.getTime()}`);
}
function generateExpiration(){
    let data = new Date();
    let exp = process.env.TMP_EXPIRA * 60000;//convertendo para minutos
    return new Date(data.getTime + exp);

}

module.exports = {
    md5generate,
    generateExpiration,
    tokenGenerate
}