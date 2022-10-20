import { Sequelize, Model, DataTypes } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig);

class AdressModel extends Model {}

AdressModel.init({
    id_endereco_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    id_usuario: {
        type: Sequelize.INTEGER,
    },
    logradouro: DataTypes.STRING,
    numero: DataTypes.STRING(45),
    cidade:DataTypes.STRING,
    uf:DataTypes.STRING(2),
    cep: DataTypes.STRING(45),
    bairro: DataTypes.STRING,
    complemento: DataTypes.STRING,
    createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        field: 'update_at',
        allowNull: false,
        type: Sequelize.DATE
      }
},
    {
      sequelize,
      modelName: 'endereços_usuario',
      freezeTableName: true,
      timestamps: true,
    }   
);

export default AdressModel;