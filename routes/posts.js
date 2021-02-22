const express = require('express');
//const { Mongoose } = require('mongoose');
const router = express.Router();
const Post = require('../models/Post');

/*router.get('/',(req,res)=>{
    res.send('we are on home');
});*/

//Gets back the post
router.get('/',async (req,res)=>{
    //res.send('we are on posts');
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});

//Submit a post
router.post('/', async(req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
    
    /*.then(data => {
        res.json(data);
    })
    .catch(err =>{
        res.json({message: err});
    });*/
});

//Specific post
router.get('/:postId', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch (err) {
        res.json({message: err});
    }
    
});

//Delete the post
router.delete('/:postId', async (req,res)=>{
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
    
});

module.exports = router;
