import { Controller, Post, Get, Body, Delete, Query } from "@nestjs/common";
import { TeamSpaceMembersService } from "./teamspace_member.service";
import { CreateTeamSpaceMemberDto } from "./dto/create-teamspace-member.dto";

@Controller("team-space-members")
export class TeamSpaceMembersController {
  constructor(private readonly service: TeamSpaceMembersService) {}

  @Post()
  create(@Body() dto: CreateTeamSpaceMemberDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Delete()
  remove(
    @Query("user_id") user_id: number,
    @Query("team_space_id") team_space_id: number
  ) {
    return this.service.remove(user_id, team_space_id);
  }
}
