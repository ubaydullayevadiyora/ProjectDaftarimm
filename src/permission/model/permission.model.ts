import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

interface IPermissionCreationAttr {
  name: string;
  label: string;
  description: string;
}

@Table({ tableName: "permissions", timestamps: false })
export class Permission extends Model<Permission, IPermissionCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column(DataType.STRING)
  declare name: string;

  @Column(DataType.STRING)
  declare label: string;

  @Column(DataType.STRING)
  declare description: string;
}
