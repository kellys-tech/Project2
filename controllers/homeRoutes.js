const router = require('express').Router();
const { Category,Expense} = require('../models');
const withAuth = require('../utils/withAuth');
router.get('/expenses',withAuth,async(req,res)=>{
try{
    const allExpenses = await Expense.findAll({
        where:{
            user_id:req.session.user_id
        },include:[{
            model:Category,
            attributes:['name']
        }]
    });

    let expensesArray = allExpenses.map((expense)=>{
        expense.get({plain:true});
    });

    res.render('home',{
        logged_in:req.session.logged_in,
        expensesArray
    });
} catch(err) {
    res.status(400).json(err);
    }
});

module.exports = router;