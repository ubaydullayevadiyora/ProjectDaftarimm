import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import { Workspace } from "../../workspace/model/workspace.model";
import { User } from "../../users/model/user.model";

@Table({ tableName: "workspace_members", timestamps: false })
export class WorkspaceMember extends Model<WorkspaceMember> {
  @ForeignKey(() => Workspace)
  @Column({ type: DataType.BIGINT })
  workspace_id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT })
  user_id: number;

  @Column({ type: DataType.BOOLEAN })
  is_admin: boolean;
}
