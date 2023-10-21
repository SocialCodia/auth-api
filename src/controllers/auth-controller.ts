import {Request,Response,NextFunction} from 'express';
import authValidation from '../validations/auth-validation';
import authService from '../services/auth-service';
import { InferCreationAttributes, InferAttributes } from 'sequelize';
import User from '../models/user-model';
import UserDto from '../dtos/user-dto';
import ErroHandler from '../utils/error-handler';


class AuthController{

    register = async (req:Request,res:Response,next:NextFunction) =>{
        const body = await authValidation.register.validateAsync(req.body)
        const response:InferAttributes<User> = await authService.createUser(body);
        return res.json({"status":1,"message":"Registration Success",data:new UserDto(response)})
    }

    login = async (req:Request,res:Response,next:NextFunction) => {
        const body = await authValidation.login.validateAsync(req.body)
        const user = await authService.findUser({email:body.email})
        if(!user)
            return next(ErroHandler.notFound("No User Found With This Email Address"))

        if(!user.isEmailVerified)
            return next(ErroHandler.badRequest("Unverified Account"))

        
        return res.json({user})
    }

    verify = async(req:Request,res:Response,next:NextFunction) =>{
        
    }

    forgot = async(req:Request,res:Response,next:NextFunction) =>{
        
    }

    reset = async(req:Request,res:Response,next:NextFunction) =>{
        
    }

    logout = async(req:Request,res:Response,next:NextFunction) =>{
        
    }

    logouts = async(req:Request,res:Response,next:NextFunction) =>{
        
    }

}

export default new AuthController