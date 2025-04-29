// models/comment.model.ts

import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import { User } from "../../users/model/user.model";
import { Block } from "../../blocks/model/block.model";

interface ICommentCreationAttr {
  content: string;
  user_id: number;
  block_id: number;
  is_edited:boolean;
}

@Table({ tableName: "comments" })
export class Comment extends Model<Comment, ICommentCreationAttr> {
  @Column({ type: DataType.TEXT, allowNull: false })
  content: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: false })
  user_id: number;

  @ForeignKey(() => Block)
  @Column({ type: DataType.BIGINT, allowNull: false })
  block_id: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  is_edited: boolean;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Block)
  block: Block;
}
