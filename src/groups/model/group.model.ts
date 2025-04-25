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

interface IGroupCreationAttr {
  name: string;
  icon: string;
  description: string;
  created_by: number;
}

@Table({ tableName: "groups", timestamps: false })
export class Group extends Model<Group, IGroupCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;
  
  @Column(DataType.STRING)
  declare name: string;

  @Column(DataType.STRING)
  declare icon: string;

  @Column(DataType.STRING)
  declare description: string;

  @Column(DataType.BIGINT)
  declare created_by: number;
}
