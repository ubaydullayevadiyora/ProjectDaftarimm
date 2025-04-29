import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateWorkspaceMemberDto } from "./dto/create-workspace-member.dto";
import { WorkspaceMember } from "./model/workspace_member.model";

@Injectable()
export class WorkspaceMembersService {
  constructor(
    @InjectModel(WorkspaceMember) private model: typeof WorkspaceMember
  ) {}

  create(dto: CreateWorkspaceMemberDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.findAll({ include: { all: true } });
  }

  remove(workspace_id: number, user_id: number) {
    return this.model.destroy({ where: { workspace_id, user_id } });
  }
}
