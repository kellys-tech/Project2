const router = require('express').Router();
const {
    Expense
} = require('../../models');

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

});



module.exports = router;