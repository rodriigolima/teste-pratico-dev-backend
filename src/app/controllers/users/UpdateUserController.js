import UserModel from "../../models/users/UserModel";
import UpdateUserService from "../../services/users/UpdateUserService";

export default class UpdateUserController {

    constructor() {
        this.service = new UpdateUserService();
    }

    async update(request, response) {
        try {
            const { id_usuario } = request.params;
            const { nome, sobrenome, email, telefone, cpf } = request.body;

            const user = await UserModel.findByPk(id_usuario);

            if (!user) {
                return response.status(404).json({ message: "User not found!" });
            }

            const updateUser = await this.service.update(id_usuario, nome, sobrenome, email, telefone, cpf);

            return response.json(updateUser);
        }
        catch (errors) {
            return { erro: errors.mensagem }
        }
    }
}