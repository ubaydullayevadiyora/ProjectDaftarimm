import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IRoleCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "role", timestamps: false })
export class Role extends Model<Role, IRoleCreationAttr> {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  description: string;
}
