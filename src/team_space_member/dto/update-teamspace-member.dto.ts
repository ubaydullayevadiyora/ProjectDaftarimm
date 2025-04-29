import { PartialType } from "@nestjs/mapped-types";
import { CreateTeamSpaceMemberDto } from "./create-teamspace-member.dto";

export class UpdateTeamSpaceMemberDto extends PartialType(CreateTeamSpaceMemberDto) {}
