import { InferAttributes } from 'sequelize';
import User from '../models/user-model';

class UserDto{

    id:number;
    name:string;
    email:string;

    constructor(data:InferAttributes<User>){
        this.id = data.id
        this.name = data.name
        this.email = data.email
    }

}

export default UserDto