import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MaxLength } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({
    example: "superadmin",
    description: "role nomi",
  })
  @IsString({ message: "Name matn bolishi kerak." })
  @IsNotEmpty({ message: "Name maydoni bosh bolmasligi kerak." })
  @MaxLength(50, { message: "Name 50 belgidan uzun bolmasligi kerak." })
  name: string;

  @ApiProperty({
    example: "superadmin role",
    description: "role tavsifi",
  })
  @IsString({ message: "Description matn bolishi kerak." })
  @IsNotEmpty({ message: "Description maydoni bosh bolmasligi kerak." })
  @MaxLength(255, {
    message: "Description 255 belgidan uzun bolmasligi kerak.",
  })
  description: string;
}
