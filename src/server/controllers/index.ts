import * as create from './cidades/Create';
import * as getAll from './cidades/GetAll';
import * as getById from './cidades/GetById';
import * as UpdateById from './cidades/UpdateById';
import * as DeleteById from './cidades/DeleteById';

export const CidadesController = { 
    ...create,
    ...getAll,
    ...getById,
    ...UpdateById,
    ...DeleteById,
};