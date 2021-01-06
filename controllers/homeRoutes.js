const router = require('express').Router();
const { Category, Expense } = require('../models');
const withAuth = require('../utils/withAuth');

router.get('/', async (req, res) => {
    try {
        const expenseData = await Category.findAll({
            include: [{
                model: Expense,
                attributes: ['name', 'description', 'amount', 'date_created', 'category_id'],
            },
            ],
        });
        const categories = expenseData.map((category) => category.get({ plain: true }));
        //pass serializes data and sess into template
        res.render('dashboard', {
            categories,
            // eslint-disable-next-line camelcase
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err.message);
    }
});



router.get('/expenses', async (req, res) => {
    try {
        const allExpenses = await Expense.findAll({
            where: {
                user_id: req.session.user_id
            }, include: [{
                model: Category,
                attributes: ['name']
            }]
        });

        let expensesArray = allExpenses.map((expense) => expense.get({ plain: true }));
        console.log(expensesArray);
        res.json(expensesArray);
        // res.render('home',{
        //     logged_in:req.session.logged_in,
        //     expensesArray
        // });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/expenses/category/:id', withAuth, async (req, res) => {
    try {
        const category1 = await Expense.findAll({
            where: {
                category_id: req.params.id,
                user_id: req.session.user_id
            }, include: [{
                model: Category,
                attributes: ['name']
            }]
        });


        const listOfExpenses = category1.map(expense => expense.get({ plain: true }));
        res.json(listOfExpenses);
        // res.render('category1',{
        //     logged_in:req.session.logged_in,
        //     listOfExpenses
        // });
    } catch (err) {
        res.status(400).json(err);
    }
});
router.get('/expenses/month/:id', withAuth, async (req, res) => {
    try {
        const category1 = await Expense.findAll({
            where: {
                date_created: req.params.id,
                user_id: req.session.user_id
            }, include: [{
                model: Category,
                attributes: ['name']
            }]
        });


        const listOfExpenses = category1.map(expense => expense.get({ plain: true }));
        res.json(listOfExpenses);
        // res.render('category1',{
        //     logged_in:req.session.logged_in,
        //     listOfExpenses
        // });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/total', withAuth, async (req, res) => {
    try {
        const allExpenses = await Expense.findAll({
            where: {
                user_id: req.session.user_id
            }, include: [{
                model: Category,
                attributes: ['name']
            }]
        });

        let expensesArray = allExpenses.map((expense) => expense.get({ plain: true }));

        const totalExpenses = expensesArray.map((expense) => expense.amount);
        const total = totalExpenses.reduce((a, b) => a + b);
        res.json(total);
        // res.render('total',{
        //     logged_in:req.session.logged_in,
        //     totalExpenses
        // });
    } catch (err) {
        res.status(400).json(err);
    }
});

//login route
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('dashboard');
        return;
    }
    res.render('login');
});
module.exports = router;