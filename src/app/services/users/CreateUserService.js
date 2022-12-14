import UserModel from "../../models/users/UserModel";

export default class CreateUserService {

    constructor() { }

    async create(nome, sobrenome, email, telefone, cpf) {

        try {

            const newUser = await UserModel.create({
                nome,
                sobrenome,
                email,
                telefone,
                cpf
            });

            return {
                Id: `${newUser.dataValues["id_usuario"]}`,
                Nome: `${newUser.dataValues["nome"]}`,
                Sobrenome: `${newUser.dataValues["sobrenome"]}`,
                Email: `${newUser.dataValues["email"]}`,
                Telefone: `${newUser.dataValues["telefone"]}`,
                CPF: `${newUser.dataValues["cpf"]}`
            };
        }
        catch (errors) {
            return {
                codigo: 400,
                status: "failed",
                message: "Ação não realizada, email ou cpf duplicado",
                erro: errors
            };
        }
    }
}