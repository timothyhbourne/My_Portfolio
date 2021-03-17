const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    const err = new Error('Oops! are you sure this is the right page?');
    err.status = 404;
    next(err);
})

router.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);

    if (err.status === 404) {
        res.render('page-not-found', { err })
    } else {
        res.render('error', { err })
    }
})

module.exports = router;