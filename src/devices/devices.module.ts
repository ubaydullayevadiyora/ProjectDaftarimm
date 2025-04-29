import { Module } from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { DevicesController } from "./devices.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Devices } from "./model/devices.model";

@Module({
  imports: [SequelizeModule.forFeature([Devices])],
  controllers: [DevicesController],
  providers: [DevicesService],
})
export class DevicesModule {}
