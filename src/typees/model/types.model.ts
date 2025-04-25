import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Block } from "../../blocks/model/block.model";

interface ITypeCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "types", timestamps: false })
export class Type extends Model<Type, ITypeCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
  })
  declare name: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @HasMany(() => Block)
  blocks: Block[];
}
