import Joi from "joi";


class AuthValidator{

    register = Joi.object({
        name:Joi.string().min(3).max(50).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(8).max(50).required()
    });
    
    login = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(8).max(50).required()
    })

}



export default new AuthValidator