import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import { Group } from "../../groups/model/group.model";
import { User } from "../../users/model/user.model";

interface IGroupMemberCreationAttr {
  group_id: number;
  user_id: number;
}

@Table({ tableName: "group_members", timestamps: false })
export class GroupMember extends Model<GroupMember, IGroupMemberCreationAttr> {
  @ForeignKey(() => Group)
  @Column({ type: DataType.BIGINT })
  group_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT })
  user_id: number;
}
