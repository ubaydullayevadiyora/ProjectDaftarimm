import { Controller, Post, Get, Body, Delete, Query } from "@nestjs/common";
import { GroupMembersService } from "./blocks.service";
import { CreateGroupMemberDto } from "./dto/create-group-member.dto";


@Controller("group-members")
export class GroupMembersController {
  constructor(private readonly service: GroupMembersService) {}

  @Post()
  create(@Body() dto: CreateGroupMemberDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Delete()
  remove(
    @Query("group_id") group_id: number,
    @Query("user_id") user_id: number
  ) {
    return this.service.remove(group_id, user_id);
  }
}
