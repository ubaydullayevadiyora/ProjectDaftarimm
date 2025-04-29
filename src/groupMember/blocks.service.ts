import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { GroupMember } from "./model/block.model";
import { CreateGroupMemberDto } from "./dto/create-group-member.dto";


@Injectable()
export class GroupMembersService {
  constructor(
    @InjectModel(GroupMember) private groupMemberModel: typeof GroupMember
  ) {}

  create(createDto: CreateGroupMemberDto) {
    return this.groupMemberModel.create(createDto);
  }

  findAll() {
    return this.groupMemberModel.findAll({ include: { all: true } });
  }

  remove(group_id: number, user_id: number) {
    return this.groupMemberModel.destroy({
      where: { group_id, user_id },
    });
  }
}
