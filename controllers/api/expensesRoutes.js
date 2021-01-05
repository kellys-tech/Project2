const router = require('express').Router();
const { Expense} = require('../../models');
var currentDate = new Date();
var month = new Array();
month[0] = 'January';
month[1] = 'February';
month[2] = 'March';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'August';
month[8] = 'September';
month[9] = 'October';
month[10] = 'November';
month[11] = 'December';
var currentMonth = month[currentDate.getMonth()];

// router.get('/', async (req, res) => {
//     const expenseInfo = await Expense.findAll({
//         include: [{ model: Category ,
//         attributes:['name']}],
//     });
//     return res.json(expenseInfo);
// });

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
           date_created: currentMonth,
           user_id: req.session.user_id,
           category_id:req.body.category_id
        });
        res.status(200).json(newExpense);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;