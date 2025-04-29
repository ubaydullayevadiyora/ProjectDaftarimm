import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateTeamSpaceMemberDto } from "./dto/create-teamspace-member.dto";
import { TeamSpaceMember } from "./model/block.model";

@Injectable()
export class TeamSpaceMembersService {
  constructor(
    @InjectModel(TeamSpaceMember) private model: typeof TeamSpaceMember
  ) {}

  create(dto: CreateTeamSpaceMemberDto) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.findAll({ include: { all: true } });
  }

  remove(user_id: number, team_space_id: number) {
    return this.model.destroy({ where: { user_id, team_space_id } });
  }
}
