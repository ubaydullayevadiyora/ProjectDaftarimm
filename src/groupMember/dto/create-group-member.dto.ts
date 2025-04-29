import { ApiProperty } from "@nestjs/swagger";
import { IsInt,Min } from "class-validator";

export class CreateGroupMemberDto {
  @ApiProperty({
    example: 1,
    description: "type idsi",
  })
  @IsInt({ message: "TypeId butun son bolishi kerak." })
  typeId: number;

  @ApiProperty({
    example: 1,
    description: "o'zini idsi",
  })
  @IsInt({ message: "Parent butun son bolishi kerak." })
  parent: number;

  @ApiProperty({
    example: 1,
    description: "position",
  })
  @IsInt({ message: "Order_index butun son bolishi kerak." })
  @Min(1, { message: "Order_index 1 dan kichik bolmasligi kerak." })
  order_index: number;
}
