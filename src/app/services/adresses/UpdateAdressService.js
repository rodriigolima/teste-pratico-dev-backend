import AdressModel from "../../models/adresses/AdressModel";

export default class UpdateAdressService {

    constructor() { }

    async update(
        id_endereco_usuario,
        logradouro,
        numero,
        cidade,
        uf,
        cep,
        bairro,
        complemento
    ) {
        try {
            const adress = await AdressModel.findByPk(id_endereco_usuario);

            if (!adress) {
                return { message: "Address not found with id: " + id_endereco_usuario };
            }

            const [numberRecordsUpdated] = await AdressModel.update(
                {
                    logradouro,
                    numero,
                    cidade,
                    uf,
                    cep,
                    bairro,
                    complemento
                },
                {
                    where: { id_endereco_usuario },
                }
            );
            if (numberRecordsUpdated === 0) {
                return {
                    mensagem: "No changes made, the data is the same!",
                };
            } else {
                return {
                    mensagem: "Address successfully updated!",
                    Logradouro: logradouro,
                    Numero: numero,
                    Cidade: cidade,
                    UF: uf,
                    CEP: cep,
                    Bairro: bairro,
                    Complemento: complemento,
                };
            }
        } catch (error) {
            console.log(error);
            return { erro: error.message };
        }
    }
}