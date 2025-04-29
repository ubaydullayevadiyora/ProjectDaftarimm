import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { TeamSpaceMember } from "./model/block.model";
import { TeamSpaceMembersController } from "./teamspace_member.controller";
import { TeamSpaceMembersService } from "./teamspace_member.service";

@Module({
  imports: [SequelizeModule.forFeature([TeamSpaceMember])],
  controllers: [TeamSpaceMembersController],
  providers: [TeamSpaceMembersService],
})
export class TeamspaceMembersModule {}
