const router = require('express').Router();
const { Expense, User, Category } = require('../../models');

router.get('/', async (req, res) => {
    const blogInfo = await Expense.findAll({
        include: [{ model: User }, { model: Category }],
    });
    return res.json(blogInfo);
});

router.delete('/:id', async (req, res) => {
    try {
        const expenseData = await Expense.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        res.status(200).json(expenseData);
    } catch (err) {
        throw err;
    }
});
router.post('/', async (req, res) => {
    try {
        const newExpense = await Expense.create({
           name:req.body.name,
           description:req.body.description,
           amount: req.body.amount,
           user_id: req.session.user_id,
           category_id:req.body.category_id
        });
        res.status(200).json(newExpense);
    } catch (err) {
        res.status(400).json(err);
    }
<<<<<<< HEAD

=======
>>>>>>> 331b61abed86b626f4be2ca0c885972ea688579a
});


module.exports = router;