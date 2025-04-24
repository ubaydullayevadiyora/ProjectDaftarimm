import { Module } from "@nestjs/common";
import {BlockPropertiessService } from "./block_properties.service";
import {BlockPropertiesController } from "./block_properties.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { BlockProperties } from "./model/block_properties.model";

@Module({
  imports: [SequelizeModule.forFeature([BlockProperties])],
  controllers: [BlockPropertiesController],
  providers: [BlockPropertiessService],
})
export class BlockPropertiesModule {}
