import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt } from "class-validator";

export class CreateTeamSpaceMemberDto {
  @ApiProperty({ example: 1, description: "User ID" })
  @IsInt()
  user_id: number;

  @ApiProperty({ example: 2, description: "Team Space ID" })
  @IsInt()
  team_space_id: number;

  @ApiProperty({ example: true, description: "Azo ekanligini bildiradi" })
  @IsBoolean()
  is_member: boolean;
}
