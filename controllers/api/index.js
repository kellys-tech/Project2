const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/users', userRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
