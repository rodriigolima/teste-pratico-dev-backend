import DeleteAdressService from "../../services/adresses/DeleteAdressService";

export default class DeleteAdressController {

    constructor() {
        this.service = new DeleteAdressService();
    }

    async delete(request, response) {
        const { id_endereco_usuario } = request.params;

        const deletedAdress = await this.service.delete(id_endereco_usuario);

        response.json(deletedAdress);
    }
}