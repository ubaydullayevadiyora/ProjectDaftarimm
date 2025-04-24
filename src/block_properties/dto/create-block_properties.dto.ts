import { IsInt, IsString, MinLength } from "class-validator";

export class CreateBlockPropertiesDto {
  @IsInt({ message: "BlockId butun son bolishi kerak." })
  blockId: number;

  @IsInt({ message: "PropertiesId butun son bolishi kerak." })
  propertiesId: number;

  @IsString({ message: "Value string bolishi kerak." })
  @MinLength(1, { message: "Value bosh bolmasligi kerak." })
  value: string;
}
