import { Sequelize, Model, DataTypes } from 'sequelize';
import databaseConfig from "../../../config/database";
import AdressModel from "../adresses/AdressModel";

const sequelize = new Sequelize(databaseConfig);

class UserModel extends Model {}

UserModel.init({
  id_usuario: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  nome: DataTypes.STRING,
  sobrenome: DataTypes.STRING,
  email: DataTypes.STRING,
  telefone: DataTypes.STRING(45),
  cpf: DataTypes.STRING(45),
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
  modelName: 'usuarios',
  timestamps: true,
});

UserModel.hasOne(AdressModel, { foreignKey: "id_usuario", as: "endereços_usuario" });


export default UserModel;