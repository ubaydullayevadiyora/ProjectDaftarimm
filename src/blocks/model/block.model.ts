import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { BlockProperties } from "../../block_properties/model/block_properties.model";
import { Properties } from "../../properties/model/properties.model";
import { Type } from "../../typees/model/types.model";

interface IBlockCreationAttr {
  typeId: number;
//   created_by: number;
  parent: number;
  order_index: number;
}

@Table({ tableName: "blocks", timestamps: false })
export class Block extends Model<Block, IBlockCreationAttr> {
  @ForeignKey(() => Type)
  @Column(DataType.BIGINT)
  typeId: number;

  // @Column(DataType.BIGINT)
  // created_by: number;

  @ForeignKey(() => Block)
  @Column(DataType.BIGINT)
  parent: number;

  @Column(DataType.INTEGER)
  order_index: number;

  @BelongsTo(() => Type)
  type: Type;

  @BelongsTo(() => Block, { foreignKey: "parent" })
  parentBlock: Block;

  @HasMany(() => Block, { foreignKey: "parent" })
  children: Block[];

  @BelongsToMany(() => Properties, () => BlockProperties)
  properties: Properties[];
}
