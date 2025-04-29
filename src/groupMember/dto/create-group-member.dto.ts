import { ApiProperty } from "@nestjs/swagger";
import { IsInt,Min } from "class-validator";

export class CreateGroupMemberDto {
  @ApiProperty({
    example: 1,
    description: "type idsi",
  })
  @IsInt({ message: "TypeId butun son bolishi kerak." })
  groupId: number;

  @ApiProperty({
    example: 1,
    description: "type idsi",
  })
  @IsInt({ message: "TypeId butun son bolishi kerak." })
  userId: number;
}
