const router = require('express').Router();
const { Expense, User} = require('../../models');

router.get('/', async (req, res) => {
    const blogInfo = await Expense.findAll({
        include: [{ model: User ,
        attributes:['name']}],
    });
    return res.json(blogInfo);
});
router.get('/expenses/category1',async(req,res)=>{
    try{
        const category1 =await Expense.findAll({
            where:{
                category_id:1,
                user_id:req.session.user_id
            }
        });

        const listOfExpenses = category1.map(expense => expense.get({plain:true}));

        res.render('category1',{
            logged_in:req.session.logged_in,
            listOfExpenses
        });
    } catch(err){
        res.status(400).json(err);
    }
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
});


module.exports = router;