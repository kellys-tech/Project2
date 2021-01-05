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

router.get('/expensesTotal',withAuth,async(req,res)=>{
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

const expensesArray = [{
    name:'house',
    description:'lend',
    amount:4000,
},{
    name:'car',
    description:'new car',
    amount:388
},{
    name:'loan',
    description:'sba',
    amount:61
}];
    

// console.log(expensesArray.reduce(,) => a + b, 0));



module.exports = router;