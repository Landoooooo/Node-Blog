const express = require('express');

const Posts = require('../../data/helpers/postDb');

const router = express.Router();

router.get('/', async (req,res) => {
    try{
        const posts = await Posts.get();
        res.status(200).json(posts)
    } catch (e) {
        res.status(500).json({message: 'error getting posts.'});
    }

});

router.get('/:id', async (req,res) => {
    try{
        const post = await Posts.getById(req.params.id);
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json({message: 'error getting post.'});
    }
})

router.post('/', async (req,res) => {
    try{
        const posts = await Posts.insert(req.body);
        res.status(200).json(posts)
    } catch (e) {
        res.status(500).json({message: 'error adding posts.'});
    }
});

router.put('/:id', async (req,res) => {
    try{
        const post = await Posts.update(req.params.id, req.body);
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json({message: 'error updating posts.'});
    }
});

router.delete('/:id', async(req,res) => {
    try{
        const post = await Posts.remove(req.params.id);
        res.status(200).json(post)
    } catch (e) {
        res.status(500).json({message: 'error updating posts.'});
    }
})

module.exports = router;