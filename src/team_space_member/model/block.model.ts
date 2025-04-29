import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import { User } from "../../users/model/user.model";

interface ITeampaceMemberCreationAttr {
  user_id: number;
  team_space_id: number;
  is_member: boolean;
}

@Table({ tableName: "team_space_members", timestamps: false })
export class TeamSpaceMember extends Model<TeamSpaceMember, ITeampaceMemberCreationAttr> {
  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT })
  user_id: number;

  @ForeignKey(() => TeamSpaceMember)
  @Column({ type: DataType.BIGINT })
  team_space_id: number;

  @Column({ type: DataType.BOOLEAN })
  is_member: boolean;
}
