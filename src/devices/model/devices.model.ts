import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "../../users/model/user.model";

interface DevicesCreationAttrs {
  user_id: number;
  name: string;
  last_active: Date;
  location: string;
  information: object;
}

@Table({ tableName: "devices", timestamps: false })
export class Devices extends Model<Devices, DevicesCreationAttrs> {
  @Column({ type: DataType.BIGINT, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.DATE })
  last_active: Date;

  @Column({ type: DataType.STRING })
  location: string;

  @Column({ type: DataType.JSON })
  information: object;
}
