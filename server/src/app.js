const port = 3000;

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const newsRoutes = require('./routes/news.routes');

require('dotenv').config();

// Rutas

// Middlewares para cliente
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'))

// Uso de rutas
app.use('/api/news', newsRoutes)

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('Conectado a la base de datos')
    } catch (err) {
        console.error('Connection error')
    }
    app.listen(3000, () => console.log(`Server is running on port ${port}`));
}

startServer();

