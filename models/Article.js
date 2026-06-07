const mongoose = require("mongoose");

const schema=mongoose.Schema;

const articeleSchema=new schema({
    title: String,
    numberofLikes: Number,
    body: String});

const Article=mongoose.model("Article",articeleSchema);



module.exports=Article;