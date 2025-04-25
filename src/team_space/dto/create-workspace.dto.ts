import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Min } from "class-validator";

export class CreateWorkspaceDto {
  @ApiProperty({
    example: "Devs Team",
    description: "turli xil team lar uchun",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "this Team only coders",
    description: "team description",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "/image.png",
    description: "team uchun rasm",
  })
  icon: string;

  @ApiProperty({
    example: 1,
    description: "qaysi wok spaceda? 1 - workspaceda",
  })
  @IsInt()
  workspaceId: number;

  @ApiProperty({
    example: "teamspace created by user1",
    description: "team kim mtomonidan ochilganligi haqida",
  })
  @IsInt()
  created_by: number;

  @ApiProperty({
    example: 1,
    description: "nimalarga ruxsat etilgan? ",
  })
  @IsInt()
  permissionId: number;
}
