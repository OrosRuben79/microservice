// characterSchema.js
const { Schema, model } = require('mongoose');

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: {
    type: String,
    ref: 'Planet'
  },
  films: 
  [{
    type: String,
    ref: 'Film'
  }]

});

characterSchema.statics.list = async function () {
  return await this.find()
  .populate("homeworld", ["_id", "name"])
  .populate("films", ["_id title"]); // Agrega "title" para obtener el título de las películas
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
  .populate("homeworld", "_id name")
  .populate("films", "_id title");
}

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
}



module.exports = characterSchema;