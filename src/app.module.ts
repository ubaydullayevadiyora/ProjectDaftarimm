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
import { User } from "./users/model/user.model";
import { Admin } from "./admins/model/admin.model";
import { Role } from "./roles/model/role.model";
import { UsersModule } from "./users/users.module";
import { AdminsModule } from "./admins/admins.module";
import { RolesModule } from "./roles/roles.module";
import { FileModule } from './file/file.module';

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
      models: [Block, Type, BlockProperties, Properties, User, Admin, Role],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    BlocksModule,
    TypesModule,
    BlockPropertiesModule,
    PropertiesModule,
    UsersModule,
    AdminsModule,
    RolesModule,
    FileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
