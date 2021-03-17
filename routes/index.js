const express = require('express');
const router = express.Router();
const { data } = require('../data/projectsData.json');
const { projects } = data;

// Render Index Page
router.get('/', (req, res) => {
    res.render('index', { project_data: projects });
});

// Render About Page
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;