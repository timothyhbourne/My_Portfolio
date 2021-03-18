// Required Modules & Routers
const express = require('express');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index');
const projectRouter = require('./routes/project');

// Server Variables
const app = express();
const port = 3000;

// App Middleware & View Engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));
app.set('view engine', 'pug');
app.use('/', indexRoute);
app.use(projectRouter);

// Error 404 Middleware
app.use((req, res, next) => {
    const err = new Error('Oops! are you sure this is the right page?');
    err.status = 404;
    next(err);
});

// Error Handler For Either 404 or Other Errors
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || 'Server error';
    
    res.locals.error = err;
    res.status(err.status);

    if (err.status === 404) {
        res.render('page-not-found', { err });
        console.log(err.status, err.message);
    } else {
        res.render('error', { err });
        console.log(err.status, err.message);
    };
});

// Server Port
app.listen(port, () => console.log('Live on localhost:3000'));