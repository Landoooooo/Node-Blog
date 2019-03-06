const express = require('express');

const postRoutes = require('../posts/posts.js');

const User = require('../../data/helpers/userDb.js');

const router = express.Router();

router.use('/:id/posts', postRoutes);

router.get('/', async (req,res) => {
    try{
        const users = await User.get();
        res.status(200).json(users)
    }catch (e) {
        res.status(500).json({
            error: "The User information could not be retrieved."
        });
    }
});

router.get('/:id', async (req,res) => {
    try{
        const { id } = req.params;
        if(User.getById(id)){
            const user = await User.getById(id)
            res.status(200).json(user)
        } else{
            res.status(404).json({ message: "The User with the specified ID does not exist." })
        }
    } catch (e){
        res.status(500).json({ error: "The User information could not be retrieved." })
    }
});

router.post('/', async (req,res) => {
    try{
        const newUser = req.body
        const user = User.insert(newUser);
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json({ error: "There was an error while saving the User to the database" })
    }
})
module.exports = router;
