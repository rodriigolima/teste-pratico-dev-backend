import Router from "express";

const routes = new Router();


// routes usuarios
routes.get("/usuarios");

routes.get("/usuarios/:id_usuario");

routes.post("/usuarios");

routes.delete("/usuarios/:id_usuario");

routes.put("/usuarios/:id_usuario");

//routes enderecos
routes.get("/enderecos-usuario/:id_usuario");

routes.get("/enderecos-usuario/:id_endereco_usuario");

routes.post("/enderecos-usuario");

routes.put("/enderecos-usuario/:id_endereco_usuario");

routes.delete("/enderecos-usuario/:id_endereco_usuario");


