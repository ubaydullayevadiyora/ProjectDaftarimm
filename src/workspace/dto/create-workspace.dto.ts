import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Min } from "class-validator";

export class CreateWorkspaceDto {
  @ApiProperty({
    example: "group created by user1",
    description: "guruh kim mtomonidan ochilganligi haqida",
  })
  @IsInt()
  created_by: number;

  @ApiProperty({
    example: "Devs Workspace",
    description:
      "o'zingizga qulay bo'lgan ish muhitini yaratish va unda ishlash uchun",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "/image.png",
    description: "guruh rasmi",
  })
  icon: string;

  @ApiProperty({
    example: "work",
    description: "notelarni tartiblash",
  })
  @IsString()
  category: string;

  @ApiProperty({
    example: "with team",
    description: "kimlar uchun",
  })
  @IsString()
  management: string;
}
