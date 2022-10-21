import Router from "express";

import UsersValidator from "../src/middlewares/UsersValidator";


//import Users Controllers
import CreateUserController from "../src/app/controllers/users/CreateUserController";
import ListUserController from "../src/app/controllers/users/ListUserController";
import UpdateUserController from "./app/controllers/users/UpdateUserController";
import DeleteUserController from "./app/controllers/users/DeleteUserController";

//import Adresses Controllers
import CreateAdressController from "./app/controllers/adresses/CreateAdressController";
import ListAdressController from "./app/controllers/adresses/ListAdressController";
import UpdateAdressController from "./app/controllers/adresses/UpdateAdressController";
import DeleteAdressController from "./app/controllers/adresses/DeleteAdressController";

import swagger from "swagger-ui-express";
import swaggerJson from "./docs/swagger.json";


const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const createAdressController = new CreateAdressController();
const listAdressController = new ListAdressController();
const updateAdressController = new UpdateAdressController();
const deleteAdressController = new DeleteAdressController();

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
routes.get("/enderecos-usuario/:id_usuario|:id_endereco_usuario",
    (request, response) => listAdressController.listUser(request, response));

routes.get("/enderecos-usuario/:id_endereco_usuario",
    (request, response) => listAdressController.listAdress(request, response));

routes.post("/enderecos-usuario",
    (request, response) => createAdressController.create(request, response));

routes.put("/enderecos-usuario/:id_endereco_usuario",
    (request, response) => updateAdressController.update(request, response));

routes.delete("/enderecos-usuario/:id_endereco_usuario",
    (request, response) => deleteAdressController.delete(request, response));


export default routes;