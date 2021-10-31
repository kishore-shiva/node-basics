const express = require('express');
const mongoose = require('mongoose');
const UserDB = require('./models/user');

const router = express.Router();

router.get('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send('username is : '+username+' password is: '+password);
})

router.post('/test', (req, res) => {
    res.send('test');
})

router.get('/user/', async (req, res) => {
    let a = await UserDB.find();
    res.json(a);
})

router.post('/user/', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = new UserDB({
        username: username,
        password: password
    });
    await user.save();

    res.send('data inserted successfully');
})

router.put('/user/', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = new UserDB({
        username: username,
        password: password
    });
    await UserDB.updateOne({username: username}, {$set: {password: password}});

    res.send('data inserted successfully');
})

router.delete('/user/', async (req, res) => {
    const username = req.body.username;
    await UserDB.deleteOne({username: username});
    res.send('deleted success');
});

module.exports = router;
