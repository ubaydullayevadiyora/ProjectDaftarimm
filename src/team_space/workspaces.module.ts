import { Module } from "@nestjs/common";
import { WorkspacesService } from "./workspaces.service";
import { WorkspacesController } from "./workspaces.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Workspace } from "./model/workspace.model";
import { FileModule } from "../file/file.module";

@Module({
  imports: [SequelizeModule.forFeature([Workspace]), FileModule],
  controllers: [WorkspacesController],
  providers: [WorkspacesService],
})
export class WorkspacesModule {}
