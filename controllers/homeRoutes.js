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
router.get('/expenses/category1',withAuth,async(req,res)=>{
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

router.get('/total',withAuth,async(req,res)=>{
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
            return;
        });

        const totalExpenses = expensesArray.map((expense)=> expense.amount);
        console.log(totalExpenses.reduce((a,b) => a +b ));

        res.render('total',{
            logged_in:req.session.logged_in,
            totalExpenses
        });
    } catch(err) {
        res.status(400).json(err);
        }
    });



module.exports = router;