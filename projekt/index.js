const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const port = 8000;
const app = express();

// Requiring the user router
const userRouter = require('./routes/users');

// Connect to MongoDB
mongoose.connect('mongodb://root:root@localhost:27017/galleryDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    authMechanism: 'SCRAM-SHA-1'
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Middleware for parsing JSON
app.use(bodyParser.json());

// Set Handlebars as the view engine
app.set('view engine', 'hbs');

// Route handling for the home page
app.get('/', (req, res) => {
    res.render('index', {
        Title: "Galeria",
        Body: "Zdjęcia"
    });
});

// Using the user router
app.use('/users', userRouter);

// Route for comments - could potentially be another router like userRouter
app.get('/comments', (req, res) => {
    res.send("Komentarze");
});

// Listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
