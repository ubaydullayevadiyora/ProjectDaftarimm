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

interface IWorkspaceCreationAttr {
  name: string;
  description: string;
  icon: string;
  workspaceId: number;
  created_by: number;
  permissionId: number;
}

@Table({ tableName: "workspace", timestamps: false })
export class Workspace extends Model<Workspace, IWorkspaceCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column(DataType.STRING)
  declare name: string;

  @Column(DataType.STRING)
  declare description: string;

  @Column(DataType.STRING)
  declare icon: string;

  @Column(DataType.BIGINT)
  declare workspaceId: number;

  @Column(DataType.BIGINT)
  declare created_by: number;

  @Column(DataType.BIGINT)
  declare permissionId: number;
}
