import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { BlockProperties } from "../../block_properties/model/block_properties.model";
import { Block } from "../../blocks/model/block.model";

interface IPropertiesCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "properties", timestamps: false })
export class Properties extends Model<Properties, IPropertiesCreationAttr> {
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

  @BelongsToMany(() => Block, () => BlockProperties)
  blocks: Block[];
}
