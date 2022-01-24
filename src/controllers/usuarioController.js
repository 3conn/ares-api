const usuarioService = require('../services/usuarioService');

class UsuarioController {

    async login(req, res) {

        const { idusuario, password } = req.body;

        try {
            let credencial = await usuarioService.login(idusuario, password).catch(
                res.status(200).json(credencial)

            );
            return res.status(200).json(credencial);
            
        } catch (err) {
            return res.status(err.status).json(err);
        }
    }

    findAll(req, res) {
        return res.json({ message: `lista de usuarios ${req.params.id}` })

    }
}
module.exports = UsuarioController;