import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Min } from "class-validator";

export class CreateGroupDto {
  @ApiProperty({
    example: "Devs Group",
    description:
      "turli xil guruhlar ochib, bir necha kishilar bilan bir vaqtning o'zida suxbatlashish va boshqlar ...",
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: "/image.png",
    description: "guruh rasmi",
  })
  icon: string;

  @ApiProperty({
    example: "bu guruh faqat muhokama uchun",
    description: "guruh haqida description",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "group created by user1",
    description: "guruh kim mtomonidan ochilganligi haqida",
  })
  @IsInt()
  created_by: number;
}
