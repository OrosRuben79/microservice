const { catchAsync } = require('../utils')

module.exports = {
    getCharacters : catchAsync(require('./getCharacters')),
    createCharacters : catchAsync(require('./createCharacters'))
}