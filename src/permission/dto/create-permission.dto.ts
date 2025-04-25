import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Min } from "class-validator";

export class CreatePermissionDto {
  @ApiProperty({
    example: "Devs Permission",
    description: "ruxsat berish",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "label",
    description: "maydon",
  })
  @IsString()
  label: string;

  @ApiProperty({
    example: "bu permission faqat devs uchun",
    description: "permission haqida description",
  })
  @IsString()
  description: string;
}
