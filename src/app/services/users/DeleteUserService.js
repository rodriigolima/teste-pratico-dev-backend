import UserModel from "../../models/users/UserModel";

export default class DeleteUserService {

    constructor() {}

    async delete(id_usuario) {
        try {
            const user = await UserModel.findByPk(id_usuario);
      
            await user.destroy();
        
            return { message: "User deleted!"};
        } 
        catch (errors) {
            return { erro: errors.message };
        }
    }
}