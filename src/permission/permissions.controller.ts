import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { PermissionsService } from "./permissions.service";
import { CreatePermissionDto } from "./dto/create-permission.dto";
import { UpdatePermissionDto } from "./dto/update-permission.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Permission } from "./model/permission.model";

@Controller("permissions")
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @UseInterceptors(FileInterceptor("icon"))
  create(
    @Body() createPermissionDto: CreatePermissionDto,
    @UploadedFile() icon: any
  ): Promise<Permission> {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.permissionsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.permissionsService.remove(+id);
  }
}
