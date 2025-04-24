import { Module } from "@nestjs/common";
import { PropertiesService } from "./properties.service";
import { PropertiesController } from "./properties.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Properties} from "./model/properties.model";

@Module({
  imports: [SequelizeModule.forFeature([Properties])],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
