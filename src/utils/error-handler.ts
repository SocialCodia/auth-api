
interface ErrorInterface{
    message:string,
    statusCode:Number
}

class ErroHandler extends Error{


    constructor(message:string,statusCode:Number){
        super(message)
        // @ts-ignore
        this.statusCode = statusCode;
        ErroHandler.captureStackTrace(this,this.constructor)
    }

    static notFound = (message : string= "Not Found") => new ErroHandler(message,404)

    static badRequest = (message : string= "Bad Request") => new ErroHandler(message,400)

    static unauthorizedAccess = (message : string= "Unauthorized Access") => new ErroHandler(message,401)

    static serverError = (message : string= "Oops..! Something went wrong") => new ErroHandler(message,500)

}

export default ErroHandler