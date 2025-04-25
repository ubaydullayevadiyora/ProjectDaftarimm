import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Block } from "../../blocks/model/block.model";
import { Properties } from "../../properties/model/properties.model";

interface IBlockPropertiesCreationAttr {
  blockId: number;
  propertiesId: number;
  value: string;
}

@Table({ tableName: "block_properties", timestamps: false })
export class BlockProperties extends Model<
  BlockProperties,
  IBlockPropertiesCreationAttr
> {
  @ForeignKey(() => Block)
  @Column(DataType.BIGINT)
  blockId: number;

  @ForeignKey(() => Properties)
  @Column(DataType.BIGINT)
  propertiesId: number;

  @Column(DataType.STRING)
  value: string;

  @BelongsTo(() => Block)
  block: Block;

  @BelongsTo(() => Properties)
  property: Properties;
}
