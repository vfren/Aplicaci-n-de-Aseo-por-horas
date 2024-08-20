const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { userType, username, email, password } = req.body;

  try {
    const user = new User({ userType, username, email, password });
    await user.save();
    res.status(201).send('Usuario registrado correctamente');
  } catch (err) {
    if (err.code === 11000) {
      res.status(409).send('Usuario ya existe');
    } else {
      res.status(500).send('Error al registrar el usuario');
    }
  }
});

module.exports = router;
