import { Module } from "@nestjs/common";
import { WorkspaceMembersService } from "./workspace_member.service";
import { WorkspaceMembersController } from "./workspace_member.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { WorkspaceMember } from "./model/workspace_member.model";

@Module({
  imports: [SequelizeModule.forFeature([WorkspaceMember])],
  controllers: [WorkspaceMembersController],
  providers: [WorkspaceMembersService],
})
export class WorkspaceMembersModule {}
