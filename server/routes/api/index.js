const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reportsRoutes = require('./reportsRoutes');
const emotionsRoutes = require('./emotionsRoutes');

// put the routes here
router.use('/user', userRoutes);
router.use('/reports', reportsRoutes);
router.use('/emotions', emotionsRoutes);


module.exports = router;