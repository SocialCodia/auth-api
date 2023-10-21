import { Model,DataTypes,InferAttributes,InferCreationAttributes,CreationOptional } from "sequelize";
import db from "../configs/db";
import bcrypt from "bcrypt";

class User extends Model<InferAttributes<User>,InferCreationAttributes<User>>{
    declare id: CreationOptional<number>;
    declare name: string;
    declare email:string;
    declare password:string;
    declare isEmailVerified:boolean;
}

User.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(100),
        unique:true,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    isEmailVerified:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
},{ 
    tableName:'users',
    sequelize:db,
    underscored:true,
    freezeTableName:true,
});


User.beforeCreate(async(user)=>{
    const salt = bcrypt.genSaltSync(10,'a');
    user.password = bcrypt.hashSync(user.password,salt)
})



export default User

