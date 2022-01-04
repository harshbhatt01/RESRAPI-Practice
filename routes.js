const express = require("express")
const Post = require('./models/Post')

const router = express.Router()



router.get("/posts/",async(req,res)=>{

    const post = await Post.find()
    res.send(post)

});

module.exports = router