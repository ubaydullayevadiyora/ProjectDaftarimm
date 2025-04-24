import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { BlocksModule } from './blocks/blocks.module';
import { Block } from "./blocks/model/block.model";
import { Type } from "./typees/model/types.model";
import { TypesModule } from "./typees/types.module";
import { BlockProperties } from "./block_properties/model/block_properties.model";
import { BlockPropertiesModule } from "./block_properties/block_properties.module";
import { Properties } from "./properties/model/properties.model";
import { PropertiesModule } from "./properties/properties.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [Block, Type, BlockProperties, Properties],
      autoLoadModels: true,
      sync: { alter: true },
      logging: true,
    }),
    BlocksModule,
    TypesModule,
    BlockPropertiesModule,
    PropertiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
