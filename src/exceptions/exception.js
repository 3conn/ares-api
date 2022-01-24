const InvalidModelException = class InvalidModelException{
    /**
     * Classe utilizada para tratar erros em Models e DTO's
     * @param {number} status 
     * @param {string} message 
     */
    constructor(status, message){

        this.status = status || 400;
        this.message = message || `O modelo informado não é válido.`;
        this.name = `Modelo inválido`;
        this.stack = (new Error().stack);

    }
}

const NotAthorizedException = class NotAthorizedException{
    /**
     * Classe utilizada para tratar exceções em acessos não autorizados
     * @param {number} status 
     * @param {string} message 
     */
    constructor(status, message){

        this.status = status || 403;
        this.message = message || `Recurso não autorizado.`;
        this.name = `Não autorizado`;
        this.stack = (new Error().stack);

    }
}
const NotFoundException = class NotFoundException{
    /**
     * Classe utilizada para tratar exceções de recurso não encontrado
     * @param {number} status 
     * @param {string} message 
     */
    constructor(status, message){

        this.status = status || 404;
        this.message = message || `Recurso não encontrado.`;
        this.name = `Não encontrado`;
        this.stack = (new Error().stack);

    }
}
const AppException = class AppException{
    /**
     * Classe utilizada para tratar exceções do servidor
     * @param {number} status 
     * @param {string} message 
     */
    constructor(status, message){

        this.status = status || 500;
        this.message = message || `Erro interno na aplicação ${message && ' - ' + message}.`;
        this.name = `Error on server application`;
        this.stack = (new Error().stack);

    }
}
module.exports = {
    InvalidModelException,
    NotFoundException,
    NotAthorizedException,
    AppException
}