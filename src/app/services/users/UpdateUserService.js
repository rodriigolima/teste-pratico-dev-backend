import UserModel from "../../models/users/UserModel";

export default class UpdateUserService {

    constructor() { }

    async update(id_usuario, nome, sobrenome, email, telefone, cpf) {
        try {

            const [numberOfUpdatedRecords] = await UserModel.update({
                nome,
                sobrenome,
                email,
                telefone,
                cpf
            },
                {
                    where: { id_usuario },
                }
            );
            if ([numberOfUpdatedRecords] === 0) {
                return { mensagem: "Dados iguais" };
            }

            return {
                mensagem: "Address successfully updated!",
                nome,
                sobrenome,
                email,
                telefone,
                cpf
            }

        }
        catch (errors) {
            return { erro: errors.message };
        }
    }
}