import express, {Application,Request,Response,NextFunction} from 'express';
import dotenv from 'dotenv';
require('./configs/db')
import errorMiddleware from './middlewares/error-middleware';
import ErrorHandler from "./utils/error-handler";
import authRoute from './routes/auth-route'

import User from './models/user-model';
User.sync({alter:true})



dotenv.config()
const app: Application = express()
app.use(express.json())

const PORT = process.env.PORT || 5000



app.use('/api/v1/auth/',authRoute)

app.use((req:Request,res:Response,next:NextFunction)=>{
    return next(ErrorHandler.notFound());
});


app.use(errorMiddleware)



app.listen(PORT,()=>console.log(`Server is listing on ${PORT}`))