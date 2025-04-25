import { Module } from "@nestjs/common";
import { PermissionsService } from "./permissions.service";
import { PermissionsController } from "./permissions.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Permission } from "./model/permission.model";
import { FileModule } from "../file/file.module";

@Module({
  imports: [SequelizeModule.forFeature([Permission]), FileModule],
  controllers: [PermissionsController],
  providers: [PermissionsService],
})
export class PermissionsModule {}
