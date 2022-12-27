import { Sequelize, Model, DataTypes, Dialect, InferAttributes } from 'sequelize';
import User from "../models/user-model";
// require('../models/user-model')


const DB_NAME = process.env.DB_NAME as string || 'socialcodia';
const DB_USER = process.env.DB_USER as string || 'root';
const DB_PASS = process.env.DB_PASS as string;
const DB_HOST = process.env.DB_HOST as string;
const DB_DIALECT = process.env.DB_DIALECT as Dialect;

const db:any = new Sequelize(
    DB_NAME,DB_USER,DB_PASS,{
        host:DB_HOST,
        dialect:'mysql',
        pool:{
            idle:1000,
            max:1
        }
    }
)

try{
    db.authenticate();
    console.log('Connetion Succeed With Database Server');
}catch(e){
    console.log("Failed to connect with database server => Reason : "+e)
}

// sequelize.Model = Model
// sequelize.DataTypes = DataTypes

// sequelize.User = User;
// db.Model = Model
// sequelize.DataTypes = DataTypes

// db.user = User

// db.sync()


export default db