

const expName = $('#name');
const expAmount = $('#amount');
const expDescription = $('#description');
const expCategory = $('#category');
const submitBtn = $('#submit-btn');
function addExpense(e){
e.preventDefault();
if(!expName.val()){
    alert('The new Expense needs a name');
}
if(!expAmount.val()){
    alert('Mssing Amount');
    return;
}
const newExpense = {
name: expName.val(),
description: expDescription.val(),
amount:parseInt(expAmount.val()),
category_id:parseInt(expCategory.val())
};
console.log(newExpense);
$.post('/api/expenses',newExpense).then(()=>{
    alert('Expense Added');
});
}

submitBtn.on('click',addExpense);