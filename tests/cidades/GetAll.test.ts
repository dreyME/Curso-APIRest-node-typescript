import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"
import { log } from "console";
import { number } from "yup";
import { idText } from "typescript";




describe('Cidades - GetAll', () => {


    it('Buscar todos os registros', async () => {
        
        const res1 = await testServer
        .post('/cidades')
        .send({ nome: 'Juazeiro do Norte'});
      
        
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        
        const resBuscada = await testServer
        .get('/cidades')
        .send();

        expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscada.body.length).toBeGreaterThan(0);
       
    });
});