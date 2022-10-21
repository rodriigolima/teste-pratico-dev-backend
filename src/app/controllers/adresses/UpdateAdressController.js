import UpdateAdressService from "../../services/adresses/UpdateAdressService";

export default class UpdateAdressController {
    constructor() {
        this.service = new UpdateAdressService();
    }

    async update(request, response) {
        const { id_endereco_usuario } = request.params;
        const { logradouro,
            numero,
            cidade,
            uf,
            cep,
            bairro,
            complemento
        } = request.body;

        const updatedAdress = await this.service.update(
            id_endereco_usuario,
            logradouro,
            numero,
            cidade,
            uf,
            cep,
            bairro,
            complemento
        );

        response.json(updatedAdress);
    }
}
