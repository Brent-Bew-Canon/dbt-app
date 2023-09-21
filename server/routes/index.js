const router = require('express').Router();
const authRoutes = require('./authRoutes');
const apiRoutes = require('./api');

router.use('/signup', authRoutes);
router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.send('Hello man!')
})

module.exports = router;