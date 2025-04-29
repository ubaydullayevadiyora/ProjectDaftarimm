import { Module } from "@nestjs/common";
import { GroupMembersService } from "./blocks.service";
import { GroupMembersController } from "./blocks.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { GroupMember } from "./model/block.model";

@Module({
  imports: [SequelizeModule.forFeature([GroupMember])],
  controllers: [GroupMembersController],
  providers: [GroupMembersService],
})
export class GroupMembersModule {}
