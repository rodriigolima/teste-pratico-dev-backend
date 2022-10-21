import ListUserService from "../../services/users/ListUserService";

export default class listUserController {

    constructor() {
        this.service = new ListUserService();
    }

    async list(request, response) {
        const { id_usuario } = request.params;
        const { nome } = request.query;

        if (id_usuario) {
            const users = await this.service.listOne(id_usuario);
            return response.json(users);
        }

        const users = await this.service.listAll(nome);

        return response.json(users);
    }
}