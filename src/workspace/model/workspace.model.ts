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
  created_by: number;
  name: string;
  icon: string;
  category: string;
  management: string;
}

@Table({ tableName: "workspaces", timestamps: false })
export class Workspace extends Model<Workspace, IWorkspaceCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column(DataType.BIGINT)
  declare created_by: number;

  @Column(DataType.STRING)
  declare name: string;

  @Column(DataType.STRING)
  declare icon: string;

  @Column(DataType.STRING)
  declare category: string;

  @Column(DataType.STRING)
  declare management: string;
}
