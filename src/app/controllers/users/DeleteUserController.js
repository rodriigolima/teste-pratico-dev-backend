import UserModel from "../../models/users/UserModel";
import DeleteUserService from "../../services/users/DeleteUserService";

export default class DeleteUserController {

    constructor() {
        this.service = new DeleteUserService();
    }

    async delete(request, response) {
        const { id_usuario } = request.params;

        const user = await UserModel.findByPk(id_usuario);
  
        if(!user) {
            return response.status(400).json({ message: "User not found!" });
        }

        const result = await this.service.delete(id_usuario);

        return response.send(result);
    }
}