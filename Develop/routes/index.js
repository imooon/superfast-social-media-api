const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.status(404).send('Route not found');
});

module.exports = router;
