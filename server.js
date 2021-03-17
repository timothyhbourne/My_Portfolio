// Required Modules & Routers
const express = require('express');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index');
const projectRouter = require('./routes/project');
const errorRouter = require('./routes/error');

// Server Variables
const app = express();
const port = 3000;

// App Middleware & View Engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));
app.set('view engine', 'pug');
app.use('/', indexRoute);
app.use(projectRouter);
app.use(errorRouter);

// Server Port
app.listen(port, () => console.log('Live on localhost:3000'));