const controller = {};
const path = require("path");
const newsFile = path.resolve(__dirname, "../data/news.json");
const fs = require("fs/promises");
const { v4 } = require("uuid");
const PostModel = require("../schemes/posts.scheme");

controller.getNews = async (req, res) => {
  try {
    const allPosts = await PostModel.find();
    console.log(typeof allPosts);

    res.send(allPosts);
  } catch (err) {
    res.send("Error al leer los usuarios");
  }
};

controller.createNews = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.newsId);
    if (post) {
      return res.status(409).send("Post already exists");
    }
    const { title, description, src } = req.body;

    const newNews = new PostModel({
      _id: v4(),
      src,
      title,
      description,
    });

    await newNews.save();

    const allPosts = await PostModel.find();
    res.send(allPosts);
  } catch (err) {
    res.send("Error al crear la noticia");
  }
};

controller.updateNews = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.newsId);

    if (!post) {
      return res.status(409).send("Post doesn't exist");
    }

    await PostModel.updateOne(
      { _id: post._id },
      {
        $set: {
          src: req.body.src,
          title: req.body.title,
          description: req.body.description,
        },
      }
    );

    const allPosts = await PostModel.find();
    res.send(allPosts);
  } catch (err) {
    res.send("Update error");
  }
};

controller.deleteNews = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.newsId);

    if (!post) {
      return res.status(409).send("Post doesn't exist");
    }

    await PostModel.deleteOne({ _id: post._id });

    const allPosts = await PostModel.find();
    res.send(allPosts);
  } catch (err) {
    res.send("Not found");
  }
};

module.exports = controller;
