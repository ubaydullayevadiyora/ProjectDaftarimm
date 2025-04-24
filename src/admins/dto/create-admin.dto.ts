import {
  IsString,
  IsEmail,
  IsBoolean,
  IsInt,
  MinLength,
  IsOptional,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty({
    example: "admin1",
    description: "Admin ismi",
  })
  @IsString()
  @MinLength(3, {
    message: "Full name kamida 3 ta belgidan iborat bolishi kerak.",
  })
  full_name: string;

  @ApiProperty({
    example: "admin@mail.com",
    description: "Admin email",
  })
  @IsEmail({}, { message: "Email manzili notogri formatda." })
  email: string;

  @ApiProperty({
    example: "admin123",
    description: "Admin paroli",
  })
  @IsString()
  @MinLength(6, {
    message: "Parol kamida 6 ta belgidan iborat bolishi kerak.",
  })
  password: string;

  @ApiProperty({
    example: "refresh_token",
    description: "Refresh token. ",
  })
  @IsString()
  @MinLength(6, {
    message: "Refresh token kamida 6 ta belgidan iborat bolishi kerak.",
  })
  refresh_token: string;

  @ApiProperty({
    example: 1,
    description: "Admin roli ID raqami",
    required: false,
  })
  @IsInt()
  @IsOptional()
  roleId: number;

  @ApiProperty({
    example: true,
    description: "Admin is_active",
  })
  @IsBoolean()
  is_active: boolean;
}
