import Router from "express";

import UsersValidator from "../src/middlewares/UsersValidator";

import CreateUserController from "../src/app/controllers/users/CreateUserController";

import swagger from "swagger-ui-express";
import swaggerJson from "./docs/swagger.json";

const createUserController = new CreateUserController();

const routes = new Router();

// Documentation
routes.use("/docs", swagger.serve, swagger.setup(swaggerJson));

// routes usuarios
routes.get("/usuarios");

routes.get("/usuarios/:id_usuario");

routes.post("/usuarios", UsersValidator, 
    (request, response) => createUserController.create(request, response));

routes.delete("/usuarios/:id_usuario");

routes.put("/usuarios/:id_usuario");

//routes enderecos
routes.get("/enderecos-usuario/:id_usuario");

routes.get("/enderecos-usuario/:id_endereco_usuario");

routes.post("/enderecos-usuario");

routes.put("/enderecos-usuario/:id_endereco_usuario");

routes.delete("/enderecos-usuario/:id_endereco_usuario");


export default routes;