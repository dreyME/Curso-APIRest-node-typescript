import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { get } from 'https';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';


interface IField{
    field?: string;
}


interface ICidade{
    nome: string;
}

/*
const queryValidation: yup.Schema<IField> = yup.object().shape({
    field: yup.string().required().min(3),
});

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
});
*/

export const createValidation = validation( (getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        id: yup.number(),
        nome: yup.string().required().min(3),
    })),

    query: getSchema<IField>(yup.object().shape({
        field: yup.string().optional().min(3),
    })),
}));



export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    console.log(req.body);

    return res.status(StatusCodes.CREATED).send('Não implementado!');
};






/*
export const createBodyValidator: RequestHandler = async (req,res,next)=> {

    try {

        await bodyValidation.validate(req.body, { abortEarly: false });
        next();

    } catch (error) {
        const yupError = error as yup.ValidationError;
        const Erros: Record<string, string> = {};


        yupError.inner.forEach(error => {
            if(!error.path) return;
            Erros[error.path] = error.message;
        });


    
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: Erros });
    
    }
};
*/


/*
    let validatedData: ICidade | undefined = undefined;

    try {

        validatedData = await bodyValidation.validate(req.body, { abortEarly: false });



    } catch (error) {
        const yupError = error as yup.ValidationError;
        const Erros: Record<string, string> = {};


        yupError.inner.forEach(error => {
            if(!error.path) return;
            Erros[error.path] = error.message;
        });


    
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: Erros
        });
    
    }
    *   /

    /*
    if (req.body.nome === undefined){
        return res.status(StatusCodes.BAD_REQUEST).send('Informe o valor do atributo "NOME"');
    } else if (req.body.nome.length < 3){
        return res.status(StatusCodes.BAD_REQUEST).send('O atributo nome deve ter menos do que três caracteres');
    }
    */
//return res.send('Created!')}