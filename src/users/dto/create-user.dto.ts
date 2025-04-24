import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MaxLength,
  IsUrl,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "Abror",
    description: "User ismi",
  })
  @IsString({ message: "First name matn bolishi kerak." })
  @IsNotEmpty({ message: "First name maydoni bosh bolmasligi kerak." })
  @MaxLength(50, { message: "First name 50 belgidan uzun bolmasligi kerak." })
  first_name: string;

  @ApiProperty({
    example: "Abrorov",
    description: "User familyasi",
  })
  @IsString({ message: "Last name matn bolishi kerak." })
  @IsNotEmpty({ message: "Last name maydoni bosh bolmasligi kerak." })
  @MaxLength(50, { message: "Last name 50 belgidan uzun bolmasligi kerak." })
  last_name: string;

  @ApiProperty({
    example: "abrorov@gmail.com",
    description: "User emaili",
  })
  @IsEmail({}, { message: "Email manzili notogri formatda." })
  @IsNotEmpty({ message: "Email maydoni bosh bolmasligi kerak." })
  email: string;

  @ApiProperty({
    example: "abror123",
    description: "User paroli",
  })
  @IsString({ message: "Password matn bolishi kerak." })
  @IsNotEmpty({ message: "Password maydoni bosh bolmasligi kerak." })
  @MaxLength(100, { message: "Password 100 belgidan uzun bolmasligi kerak." })
  password: string;

  @ApiProperty({
    example: "/image.png",
    description: "User rasmi",
  })
  @IsString({ message: "Photo URL matn bolishi kerak." })
  @IsUrl({}, { message: "Photo URL notogri formatda." })
  photo: string;

  @ApiProperty({
    example: "refreshToken",
    description: "User refreshTokeni",
  })
  @IsString({ message: "Refresh token matn bolishi kerak." })
  @IsNotEmpty({ message: "Refresh token maydoni bosh bolmasligi kerak." })
  refresh_token: string;

  @ApiProperty({
    example: "http://...",
    description: "User activate linki",
  })
  @IsString({ message: "Activation link matn bolishi kerak." })
  @IsNotEmpty({ message: "Activation link maydoni bosh bolmasligi kerak." })
  @IsUrl({}, { message: "Activation link notogri formatda." })
  activation_link: string;
}

