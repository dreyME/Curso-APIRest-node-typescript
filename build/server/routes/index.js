"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    return res.send('Olá, DEV!');
});
router.post('/teste', (req, res) => {
    console.log(req.body);
    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json(req.body);
});
router
    .get('/cidades', controllers_1.CidadesController.getAllValidation, controllers_1.CidadesController.getAll)
    .post('/cidades', controllers_1.CidadesController.createValidation, controllers_1.CidadesController.create);
router
    .get('/cidades/:id', controllers_1.CidadesController.getByIdValidation, controllers_1.CidadesController.getById)
    .put('/cidades/:id', controllers_1.CidadesController.UpdateByIdValidation, controllers_1.CidadesController.UpdateById)
    .delete('/cidades/:id', controllers_1.CidadesController.DeleteByIdValidation, controllers_1.CidadesController.DeleteById);
