import Router from "express";

import UsersValidator from "../src/middlewares/UsersValidator";

import CreateUserController from "../src/app/controllers/users/CreateUserController";
import ListUserController from "../src/app/controllers/users/ListUserController";
import UpdateUserController from "./app/controllers/users/UpdateUserController";
import DeleteUserController from "./app/controllers/users/DeleteUserController";

import swagger from "swagger-ui-express";
import swaggerJson from "./docs/swagger.json";

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const routes = new Router();

// Documentation
routes.use("/docs", swagger.serve, swagger.setup(swaggerJson));

// routes usuarios
routes.get("/usuarios", 
    (request, response) => listUserController.list(request, response));

routes.get("/usuarios/:id_usuario", 
    (request, response) => listUserController.list(request, response));

routes.post("/usuarios", UsersValidator, 
    (request, response) => createUserController.create(request, response));

routes.delete("/usuarios/:id_usuario", 
    (request, response) => deleteUserController.delete(request, response));

routes.put("/usuarios/:id_usuario", 
    (request, response) => updateUserController.update(request, response));

//routes enderecos
routes.get("/enderecos-usuario/:id_usuario");

routes.get("/enderecos-usuario/:id_endereco_usuario");

routes.post("/enderecos-usuario");

routes.put("/enderecos-usuario/:id_endereco_usuario");

routes.delete("/enderecos-usuario/:id_endereco_usuario");


export default routes;