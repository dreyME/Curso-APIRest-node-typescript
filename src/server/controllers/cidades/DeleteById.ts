import * as yup from 'yup';
import{ validation } from '../../shared/middlewares';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
   id?: number;
}


export const DeleteByIdValidation = validation(getSchema => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0),
        
    })),
}));



export const DeleteById = async (req: Request<IParamProps>, res: Response) => {
    
    if(Number(req.params.id) === 99999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'Registro não encontrado'
        }
    }
    
    )

    return res.status(StatusCodes.NO_CONTENT).send();
};