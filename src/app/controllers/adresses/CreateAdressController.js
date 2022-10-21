import CreateAdressService from "../../services/adresses/CreateAdressService";

export default class CreateAdressController {

    constructor() {
        this.service = new CreateAdressService();
    }

    async create(request, response) {

        const {
            logradouro,
            numero,
            cidade,
            uf,
            cep,
            bairro,
            complemento,
            id_usuario
        } = request.body;


        const createdAdress = await this.service.create(
            logradouro,
            numero,
            cidade,
            uf,
            cep,
            bairro,
            complemento,
            id_usuario
        );

        return response.json(createdAdress);

    }
}