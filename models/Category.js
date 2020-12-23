const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {};

Category.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
type: DataTypes.STRING,
allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:true
        }
    },
    {
        sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
    }
)
