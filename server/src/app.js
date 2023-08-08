const port = 3000;

const express = require('express');
const app = express();
const cors = require('cors');
const newsRoutes = require('./routes/news.routes');

// Rutas

// Middlewares para cliente
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'))

// Uso de rutas
app.use('/api/news', newsRoutes)

app.listen(3000, () => console.log(`Server is running on port ${port}`));
