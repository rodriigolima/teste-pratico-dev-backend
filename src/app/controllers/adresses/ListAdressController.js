import AdressModel from "../../models/adresses/AdressModel";
import UserModel from "../../models/users/UserModel";
import ListAdressService from "../../services/adresses/ListAdressService";

export default class ListAdressController {

    constructor() {
        this.service = new ListAdressService();
    }
    
    async listAdress(request, response) {
        const { id_endereco_usuario } = request.params;

        const adress = await this.service.listByAdress(id_endereco_usuario);

        if(!adress) {
            return response.status(404).json("User/Adress not found!")
        }
        return response.json(adress);
    }

    async listUser(request, response) {



        const { id_usuario } = request.params;
        
        const user = await this.service.listByUser(id_usuario);


        if (!user) {
            return response.status(404).json("User/Adress not found!")
        }

        return response.json(user);
    }


}