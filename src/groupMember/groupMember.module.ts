import { Module } from "@nestjs/common";
import { GroupMembersService } from "./groupMember.service";
import { GroupMembersController } from "./groupMember.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { GroupMember } from "./model/groupMember.model";

@Module({
  imports: [SequelizeModule.forFeature([GroupMember])],
  controllers: [GroupMembersController],
  providers: [GroupMembersService],
})
export class GroupMembersModule {}
