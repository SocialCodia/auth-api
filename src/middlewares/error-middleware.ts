import {Request,Response,NextFunction} from "express"

const errorMiddleware = (err:any,req:Request,res:Response,next:NextFunction) => {
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Oops..! Something went wrong"
    res.status(err.statusCode).json({status:0,message:err.message})
}


export default errorMiddleware