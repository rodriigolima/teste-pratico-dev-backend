import AdressModel from "../../models/adresses/AdressModel";

export default class CreateAdressService {

    constructor() { }

    async create(
        logradouro,
        numero,
        cidade,
        uf,
        cep,
        bairro,
        complemento,
        id_usuario
    ) {
        try {
            const newAdress = await AdressModel.create({
                logradouro,
                numero,
                cidade,
                uf,
                cep,
                bairro,
                complemento,
                id_usuario
            });



            return {
                Logradouro: `${newAdress.dataValues["logradouro"]}`,
                Número: `${newAdress.dataValues["numero"]}`,
                Cidade: `${newAdress.dataValues["cidade"]}`,
                UF: `${newAdress.dataValues["uf"]}`,
                CEP: `${newAdress.dataValues["cep"]}`,
                Bairro: `${newAdress.dataValues["bairro"]}`,
                Complemento: `${newAdress.dataValues["complemento"]}`,
                Id: `${newAdress.dataValues["id_endereco_usuario"]}`
            };
        } catch (errors) {
            return {
                codigo: 400,
                status: "failed",
                message: "Ação não realizada, usuário não encontrado ou já contem endereço cadastrado.",
                erro: errors
            };
        }
    }
}