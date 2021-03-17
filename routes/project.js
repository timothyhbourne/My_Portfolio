const express = require('express');
const router = express.Router();
const { data } = require('../data/projectsData.json');
const { projects } = data;

router.get('/project:id', (req, res) => {
    const { id } = req.params;
    const projectData = projects[id];

    res.render('project', { 
        project_data: projects,
        project_number: projectData.project_id,
        project_name: projectData.project_name,
        github_link: projectData.github_link,
        technology_used: projectData.technology_used,
        description: projectData.description,
        grade_received: projectData.grade_received
    })
})

module.exports = router;