import { Injectable } from "@nestjs/common";
import { CreatePermissionDto } from "./dto/create-permission.dto";
import { UpdatePermissionDto } from "./dto/update-permission.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Permission } from "./model/permission.model";
import { FileService } from "../file/file.service";

@Injectable()
export class PermissionsService {
  constructor(
    @InjectModel(Permission) private permissionModel: typeof Permission,
    private readonly fileService: FileService
  ) {}
  async create(createPermissionDto: CreatePermissionDto) {
    return this.permissionModel.create(createPermissionDto);
  }

  findAll() {
    return this.permissionModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} permission`;
  }

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return `This action updates a #${id} permission`;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
