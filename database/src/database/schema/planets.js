const { Schema, model } = require('mongoose');

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: String,
  orbital_period: String,
  diameter: String,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  residents: [String],
  films: [{
    type: String,
    ref: 'Film'
  }]
});


planetSchema.statics.list = async function () {
  return await this.find()
  .populate("films", ["_id"," title"]); // Agrega "title" para obtener el título de las películas
};

planetSchema.statics.get = async function (id) {
  return await this.find(id)
  .populate("films", ["_id"," title"]); // Agrega "title" para obtener el título de las películas
};

planetSchema.statics.insert = async function (planets) {
  return await this.find(planets)
};



module.exports =  planetSchema;
