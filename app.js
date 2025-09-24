const express = require('express');
require('dotenv').config();

const emailRoutes = require('./src/routes/emailRoutes');

const app = express();
app.use(express.json());

// Rutas
app.use('/', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
