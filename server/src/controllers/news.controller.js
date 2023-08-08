const controller = {}
const path = require('path')
const newsFile = path.resolve(__dirname, '../data/news.json')
const fs = require('fs/promises')
const {v4} = require('uuid')

controller.getNews = async (req, res) => {
    try {
        const data = await fs.readFile(newsFile)
        const jsonData = await JSON.parse(data)
        res.send(jsonData)
    } catch (err) {
        res.send('Error al leer los usuarios')
    }
}

controller.createNews = async (req, res) => {
    try {
        const {title, description, src} = req.body;

        const newsId = v4();

        const data = await fs.readFile(newsFile)
        const jsonData = await JSON.parse(data)

        const newNews = {
            "userId" : newsId,
            "src" : src,
            "title" : title,
            "description" : description
        }

        const newData = [...jsonData, newNews]

        fs.writeFile(newsFile, JSON.stringify(newData))

        res.send(newData)

    } catch (err) {
        res.send('Error al crear la noticia')
    }

}

controller.updateNews = async (req, res) => {
    const newsId = req.params.newsId;

    try {
        const data = await fs.readFile(newsFile);
        let jsonData = JSON.parse(data);

        const post = jsonData.find(post => post.newsId === newsId);

        if(!post) {
            return res.send('Post not found')
        }

        jsonData[post] = {
            ...jsonData[post], 
            ...req.body
        };

        fs.writeFile(newsFile, JSON.stringify(jsonData));

        res.send(jsonData[post]);
    } catch (err) {
        res.send('Update error')
    }
}

controller.deleteNews = (req, res) => {
    fs.readFile(newsFile, (err, data) => {
      if (err) {
        console.log(err);
  
        return res.send({ error: 'Error al leer el archivo de posts' });
      }
  
      let posts = JSON.parse(data);
  
      const postIndex = posts.findIndex(post => post.newsId === req.params.newsId);
  
      if (postIndex === -1) return res.status(404).send('Usuario no encontrado');
  
      posts.splice(postIndex, 1);
  
      fs.writeFile(newsFile, JSON.stringify(posts), err => {
        if (err) {
          console.log(err);
  
          return res.status(500).send({ error: 'Error al guardar el archivo de usuarios' });
        }
  
        res.status(200).send(posts);
      });
    });
  };


module.exports = controller;