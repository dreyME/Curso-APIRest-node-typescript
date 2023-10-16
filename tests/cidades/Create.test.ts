import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup"
import { log } from "console";
import { number } from "yup";
import { idText } from "typescript";




describe('Cidades - Create', () => {



    it('Criar Registro', async () => {
        
        const res1 = await testServer
        .post('/cidades')
        .send({ nome: 'Juazeiro do Norte'});
      
        


        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('object');
    })
    
}) 
