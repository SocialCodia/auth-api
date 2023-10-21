import User from "../models/user-model"
import { InferAttributes, InferCreationAttributes } from 'sequelize';

class AuthService{

    createUser = async (data:InferCreationAttributes<User>) => await User.create(data);

    findUser = async (where:any) => await User.findOne({where})


}


export default new AuthService