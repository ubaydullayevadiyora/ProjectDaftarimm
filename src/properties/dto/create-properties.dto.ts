import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MaxLength } from "class-validator";

export class CreatePropertiesDto {
  @ApiProperty({
    example: "Aziz",
    description: "property nomi",
  })
  @IsString({ message: "Name matn bolishi kerak." })
  @IsNotEmpty({ message: "Name maydoni bosh bolmasligi kerak." })
  @MaxLength(100, { message: "Name 100 belgidan uzun bolmasligi kerak." })
  name: string;

  @ApiProperty({
    example: "Aziz",
    description: "property tavsifi",
  })
  @IsString({ message: "Description matn bolishi kerak." })
  @IsNotEmpty({ message: "Description maydoni bosh bolmasligi kerak." })
  @MaxLength(255, {
    message: "Description 255 belgidan uzun bolmasligi kerak.",
  })
  description: string;
}
