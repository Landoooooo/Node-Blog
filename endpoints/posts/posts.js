const express = require('express');

const User = require('../../data/helpers/userDb.js');

const router = express.Router();

router.get('/', async (req,res) => {
    console.log('test')
    try{
        const userId = req.params.id;
        const posts = await User.getUserPosts(userId);
        res.status(200).json(posts)
    } catch (e) {
        res.status(500).json({ error: `There was an error retrieving posts ${e}` })
    }
});

module.exports = router;