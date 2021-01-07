//project2
const User = require('./User');
const Expense= require('./expense');
const Category = require('./Category');

User.hasMany(Expense, {
  foreignKey: 'user_id'
});

Expense.belongsTo(User, {
  foreignKey: 'user_id',onDelete: 'CASCADE'
});

Category.hasMany(Expense,{
  foreignKey:'category_id',
});

Expense.belongsTo(Category,{
  foreignKey:'category_id',
});

module.exports = { User, Expense, Category};
