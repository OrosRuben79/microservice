const Film = require('../database/schema/films');

// Obtener todos los films
const getFilms = async (req, res) => {
  try {
    const films = await Film.find();
    res.status(200).json(films);
  } catch (error) {
    res.status(400).json({ error: 'Error al obtener los films.' });
  }
};

// Crear un nuevo film
const createFilm = async (req, res) => {
  try {
    const newFilm = await Film.create(req.body);
    res.status(201).json(newFilm);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear un nuevo film.' });
  }
};

// Actualizar un film existente
const updateFilm = async (req, res) => {
  try {
    const updatedFilm = await Film.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedFilm);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el film.' });
  }
};

// Eliminar un film existente
const deleteFilm = async (req, res) => {
  try {
    await Film.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Film eliminado correctamente.' });
  } catch (error) {
    res.status(400).json({ error: 'Error al eliminar el film.' });
  }
};

module.exports = {
  getFilms,
  createFilm,
  updateFilm,
  deleteFilm,
};
