

module.exports = (req, res, next) => {
    const { model } = req.params;
    if(["Character", "Film", "Planet"].includes(model)){
    return next()
} else {
    throw new ClientError("Error en el nombre", 401)
}
}