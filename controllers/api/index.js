const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const expenseRoutes = require('./expensesRoutes');
router.use('/expenses', expenseRoutes);
router.use('/users', userRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
