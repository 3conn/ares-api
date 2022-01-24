const Usuario = require('../models/usuario');
const { NotAthorizedException, NotFoundException } = require('../exceptions/exception');
const token = require('../security/tokenService');
const md5 = require('md5');

async function login(idusuario, password) {
    console.log('Está executando o serviço');
    
    let usuario = await Usuario.findAll()
    //.findOne({ where: { num_reg: idusuario } }).then((error)=>{

    console.log(`${usuario}`);

    if (usuario) {
        //////Se for MASTER ou ADMIN só verifica a senha
        pswinfo = token.md5generate(password);
        pswbd = usuario.password;

        if (pswbd != pswinfo) {
            throw new NotAthorizedException(400, `Usuário ou senha inválido.`)
        }
        //////Empresa
        //2 - Verifica Expiração da credencial
        //3 - Verifica Ativação
        //////Divisão
        //2 - Verifica Expiração da credencial
        //3 - Verifica Ativação
        //////Usuário
        //1 - Verifica senha
        //2 - Verifica Expiração da credencial
        //3 - Verifica Ativação
        return _generateCredencial(usuario);
    }else{
        throw new NotFoundException(400, `Usuario não registrado.`)
    }

}
function _generateCredencial(usuario) {
    let credential = token.tokenGenerate(usuario);
    usuario.password = undefined;

    return { credential, usuario };

}
module.exports = {
    login
}