const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/envs');

const conn = mongoose.createConnection(MONGO_URI);

const characterSchema = require('./schema/characters');
const filmSchema = require('./schema/films');
const planetSchema = require('./schema/planets');

module.exports = {
  Character: conn.model("Character", characterSchema),
  Film: conn.model("Film", filmSchema),
  Planet: conn.model("Planet", planetSchema)
};
