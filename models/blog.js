const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* ...............................
.     create BLOG Schema
............................... */
const BlogSchema = new Schema({
    name: String,
    message: String
});

const Blog = mongoose.model('blogpiece', BlogSchema);

module.exports = Blog;