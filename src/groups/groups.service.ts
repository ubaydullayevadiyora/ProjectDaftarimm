import { Injectable } from "@nestjs/common";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-groups.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Group } from "./model/group.model";
import { FileService } from "../file/file.service";

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Group) private groupModel: typeof Group,
    private readonly fileService: FileService
  ) {}
  async create(createGroupDto: CreateGroupDto) {
    return this.groupModel.create(createGroupDto);
  }

  findAll() {
    return this.groupModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
