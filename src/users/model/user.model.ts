import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUserCreationAttr {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  photo: string;
  refresh_token: string;
  activation_link: string;
}

@Table({ tableName: "users", timestamps: false })
export class User extends Model<User, IUserCreationAttr> {
  @Column(DataType.STRING)
  first_name: string;

  @Column(DataType.STRING)
  last_name: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;

  @Column(DataType.STRING)
  photo: string;

  @Column(DataType.STRING)
  refresh_token: string;

  @Column(DataType.STRING)
  activation_link: string;
}
