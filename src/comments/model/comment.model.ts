// models/comment.model.ts

import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import { User } from "../../users/model/user.model";
import { Block } from "../../blocks/model/block.model";


@Table({ tableName: "comments" })
export class Comment extends Model<
  InferAttributes<Comment>,
  InferCreationAttributes<Comment>
> {
  @Column({ type: DataType.TEXT, allowNull: false })
  content: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: false })
  user_id: number;

  @ForeignKey(() => Block)
  @Column({ type: DataType.BIGINT, allowNull: false })
  block_id: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  is_edited: CreationOptional<boolean>;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Block)
  block: Block;
}
