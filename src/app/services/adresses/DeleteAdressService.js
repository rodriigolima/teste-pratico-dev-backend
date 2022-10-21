import AdressModel from "../../models/adresses/AdressModel";

export default class DeleteAdressService {

    constructor() { }

    async delete(id_endereco_usuario) {
        try {
            const adress = await AdressModel.findByPk(id_endereco_usuario);

            if (!adress) {
                return { messagem: "Address not found with id: " + id_endereco_usuario };
            }

            await adress.destroy();

            return {
                mensagem: "O endereço foi removido com sucesso!",
            };
        } catch (errors) {

            return { erro: errors };
        }
    }
}