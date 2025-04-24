import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, MinLength } from "class-validator";

export class CreateBlockPropertiesDto {
  @ApiProperty({
    example: 1,
    description: "block id",
  })
  @IsInt({ message: "BlockId butun son bolishi kerak." })
  blockId: number;

  @ApiProperty({
    example: 1,
    description: "property id",
  })
  @IsInt({ message: "PropertiesId butun son bolishi kerak." })
  propertiesId: number;

  @ApiProperty({
    example: 1,
    description: "user role valuesi",
  })
  @IsString({ message: "Value string bolishi kerak." })
  @MinLength(1, { message: "Value bosh bolmasligi kerak." })
  value: string;
}
