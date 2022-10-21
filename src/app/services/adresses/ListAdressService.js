import UserModel from "../../models/users/UserModel";
import AdressModel from "../../models/adresses/AdressModel";

export default class ListAdressService {

    constructor() { }

    async listByUser(id_usuario) {
        try {

            const userAdress = await UserModel.findByPk(id_usuario, {
                include: { association: "endereços_usuario" }
            });

            return userAdress;

        }
        catch (errors) {
            return { erro: errors }
        }
    }

    async listByAdress(id_endereco_usuario) {
        try {

            const adress = await AdressModel.findByPk(id_endereco_usuario);

            return adress;
        }
        catch (errors) {
            return { erro: errors }
        }
    }

}