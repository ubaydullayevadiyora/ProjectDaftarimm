import { Controller, Post, Get, Body, Delete, Query } from "@nestjs/common";

import { CreateWorkspaceMemberDto } from "./dto/create-workspace-member.dto";
import { WorkspaceMembersService } from "./workspace_member.service";

@Controller("workspace-members")
export class WorkspaceMembersController {
  constructor(private readonly service: WorkspaceMembersService) {}

  @Post()
  create(@Body() dto: CreateWorkspaceMemberDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Delete()
  remove(
    @Query("workspace_id") workspace_id: number,
    @Query("user_id") user_id: number
  ) {
    return this.service.remove(workspace_id, user_id);
  }
}
