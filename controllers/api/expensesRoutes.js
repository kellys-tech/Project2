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
                user_id: req.params.id,
            },
        })
        res.status(200).json(expenseData)
    } catch (err) {
        throw err;
    }
});



module.exports = router;
