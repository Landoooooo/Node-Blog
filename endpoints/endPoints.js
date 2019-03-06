const express = require('express');

const userRoutes = require('./user/user.js');

const router = express.Router();

router.get('/', (req,res) => {
    res.status(200).send('Almost there!')
});

router.use('/user', userRoutes);

module.exports = router;