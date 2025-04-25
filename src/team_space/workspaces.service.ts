import { Injectable } from "@nestjs/common";
import { CreateWorkspaceDto } from "./dto/create-workspace.dto";
import { UpdateWorkspaceDto } from "./dto/update-workspace.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Workspace } from "./model/workspace.model";
import { FileService } from "../file/file.service";

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectModel(Workspace) private groupModel: typeof Workspace,
    private readonly fileService: FileService
  ) {}
  async create(createWorkspaceDto: CreateWorkspaceDto) {
    return this.groupModel.create(createWorkspaceDto);
  }

  findAll() {
    return this.groupModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
