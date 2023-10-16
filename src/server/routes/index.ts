import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from '../controllers';

const router = Router();


router.get('/', (req, res) => {

    return res.send('Olá, DEV!');
}); 

router.post('/teste', (req, res) => {
    console.log(req.body);
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
}); 


router
    .get('/cidades', CidadesController.getAllValidation, CidadesController.getAll)
    .post('/cidades', CidadesController.createValidation , CidadesController.create); 

router
    .get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById)
    .put('/cidades/:id', CidadesController.UpdateByIdValidation, CidadesController.UpdateById)
    .delete('/cidades/:id', CidadesController.DeleteByIdValidation, CidadesController.DeleteById);




export { router };