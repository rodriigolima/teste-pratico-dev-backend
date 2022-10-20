import UserModel from "../../models/users/UserModel";


export default class ListUserService {

    constructor() {}

    async listAll() {

        try{
            const users = await UserModel.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            });
    
            return users;
        }
        catch (error) {
            return { erro: error.message };
        }
    } 

    async listOne(id_usuario) {
        try {
          const user = await UserModel.findOne({
            where: {
              id_usuario,
            },
            attributes: { exclude: ['createdAt', 'updatedAt',] }
          });
    
          if(user == null) {
            return {
                codigo: 400,
                status: "failed",
                message: "Id_usuario não encontrado!",  
                };
          }
          
          return user;
        } 
        catch (errors) {
            return { erro: errors.message };   
        }
      }
}
