const Character = require('../database/schema/characters');

// Obtener todos los characters
const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.status(200).json(characters);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener los characters.' });
  }
};

// Crear un nuevo character
const createCharacter = async (req, res) => {
  try {
    const newCharacter = await Character.create(req.body);
    res.status(201).json(newCharacter);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear un nuevo character.' });
  }
};

// Actualizar un character existente
const updateCharacter = async (req, res) => {
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCharacter);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el character.' });
  }
};

// Eliminar un character existente
const deleteCharacter = async (req, res) => {
  try {
    await Character.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Character eliminado correctamente.' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el character.' });
  }
};

module.exports = {
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
