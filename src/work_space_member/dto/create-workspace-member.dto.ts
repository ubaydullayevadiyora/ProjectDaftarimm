import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt } from "class-validator";

export class CreateWorkspaceMemberDto {
  @ApiProperty({ example: 1, description: "Workspace ID" })
  @IsInt()
  workspace_id: number;

  @ApiProperty({ example: 5, description: "User ID" })
  @IsInt()
  user_id: number;

  @ApiProperty({ example: true, description: "Admin statusi" })
  @IsBoolean()
  is_admin: boolean;
}
