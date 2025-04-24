import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdminCreationAttr {
  full_name: string;
  email: string;
  password: string;
  refresh_token: string;
  roleId: number;
  is_active: boolean;
}

@Table({ tableName: "admins", timestamps: false })
export class Admin extends Model<Admin, IAdminCreationAttr> {
  @Column(DataType.STRING)
  full_name: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.STRING)
  refresh_token: string;

  @Column(DataType.INTEGER)
  roleId: number;

  @Column(DataType.BOOLEAN)
  is_active: boolean;
}
