import { Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./model/role.model";

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
