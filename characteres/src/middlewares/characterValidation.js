const { ClientError } = require('../utils/errors')

module.exports = (req, res, next) => {
    const { name } = req.body;
    if(name) return  next(name);
    else throw new ClientError("Error en el nombre", 401)
}