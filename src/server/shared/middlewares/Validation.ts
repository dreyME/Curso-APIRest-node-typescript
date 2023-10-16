import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Schema , ValidationError} from 'yup' ;

type TProperty = 'body'|'headers'|'params'|'query'

type TGetSchema = <T>(schema: Schema<T>) => Schema<T>

type TAllSchemas = Record<TProperty, Schema<any>>

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
    
    const schemas = getAllSchemas((schema: any) => schema);
    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {

        try {

            schema.validateSync(req[key as TProperty], { abortEarly: false });
            //return next();
    
        } catch (error) {
            const yupError = error as ValidationError;
            const Erros: Record<string, string> = {};
    
    
            yupError.inner.forEach(error => {
                if(!error.path) return;
                Erros[error.path] = error.message;
            });
    
            errorsResult[key] = Erros;
        
            // return res.status(StatusCodes.BAD_REQUEST).json({ errors: Erros });
        
        }

    });

    if (Object.entries(errorsResult).length === 0) {
        return next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
    }
};

