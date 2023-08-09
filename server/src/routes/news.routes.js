const express = require('express')
const controller = require('../controllers/news.controller')
const newsRoutes = express.Router()

newsRoutes.get('/', controller.getNews)

newsRoutes.post('/createNews', controller.createNews)

newsRoutes.patch('/:newsId', controller.updateNews)

newsRoutes.delete('/:newsId', controller.deleteNews)

module.exports = newsRoutes;