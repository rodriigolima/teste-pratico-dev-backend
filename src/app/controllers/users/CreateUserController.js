import CreateUserService from "../../services/users/CreateUserService";

export default class CreateUserController {

    constructor() {
        this.service = new CreateUserService();
    }

    async create(request, response) {

        const {
            nome,
            sobrenome,
            email,
            telefone,
            cpf
        } = request.body;

        const createdUser = await this.service.create(
            nome,
            sobrenome,
            email,
            telefone,
            cpf
        );

        return response.json(createdUser);
    }
}