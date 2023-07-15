const Planet = require('../database/schema/planets');

// Obtener todos los planets
const getPlanets = async (req, res) => {
  try {
    const planets = await Planet.find();
    res.status(200).json(planets);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener los planets.' });
  }
};

// Crear un nuevo planet
const createPlanet = async (req, res) => {
  try {
    const newPlanet = await Planet.create(req.body);
    res.status(201).json(newPlanet);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear un nuevo planet.' });
  }
};

// Actualizar un planet existente
const updatePlanet = async (req, res) => {
  try {
    const updatedPlanet = await Planet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPlanet);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el planet.' });
  }
};

// Eliminar un planet existente
const deletePlanet = async (req, res) => {
  try {
    await Planet.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Planet eliminado correctamente.' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el planet.' });
  }
};

module.exports = {
  getPlanets,
  createPlanet,
  updatePlanet,
  deletePlanet,
};
