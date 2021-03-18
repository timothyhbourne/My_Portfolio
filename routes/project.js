const express = require('express');
const router = express.Router();
const { data } = require('../data/projectsData.json');
const { projects } = data;

// Render Project Page & Pass Data Dynamically From JSON Into Project Page
router.get('/project/:id', (req, res) => {
    const { id } = req.params;
    const projectData = projects[id];

    res.render('project', { 
        project_data: projects,
        project_number: projectData.project_id,
        project_name: projectData.project_name,
        github_link: projectData.github_link,
        live_link: projectData.live_link,
        technology_used: projectData.technology_used,
        description: projectData.description,
        grade_received: projectData.grade_received,
        image_urls: projectData.image_urls
    });
});

module.exports = router;