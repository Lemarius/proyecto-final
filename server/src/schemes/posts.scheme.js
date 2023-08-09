const mongoose = require('mongoose');

const PostScheme = mongoose.Schema({_id: String, src: String, title: String, description: String})

const PostModel = mongoose.model('Post', PostScheme)

module.exports = PostModel;