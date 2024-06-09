const express = require('express');
const User = require('../db/user'); // Assuming User.js is in the same directory
const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// POST a new user
router.post('/', async (req, res) => {
    const { imie, nazwisko, login, haslo, email } = req.body;
    let user = new User({ imie: imie, nazwisko: nazwisko, login: login, haslo: haslo, email: email });
    try {
        await user.save();
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

// GET a single user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) res.status(404).send("No user found");
        else res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// PUT to update a user's details
router.put('/:id', async (req, res) => {
    const { name, age } = req.body;
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { name, age }, { new: true });
        if (!user) res.status(404).send("No user found");
        else res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) res.status(404).send("No user found");
        else res.send({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
