// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch((err) => console.error(err));

app.use('/api/auth', authRoutes);


app.listen(process.env.PORT, () =>
  console.log(`🚀 Serveur lancé sur le port ${process.env.PORT}`)
);
