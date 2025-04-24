import {
  IsString,
  IsEmail,
  IsBoolean,
  IsInt,
  MinLength,
  IsOptional,
} from "class-validator";

export class CreateAdminDto {
  @IsString()
  @MinLength(3, {
    message: "Full name kamida 3 ta belgidan iborat bolishi kerak.",
  })
  full_name: string;

  @IsEmail({}, { message: "Email manzili notogri formatda." })
  email: string;

  @IsString()
  @MinLength(6, {
    message: "Parol kamida 6 ta belgidan iborat bolishi kerak.",
  })
  password: string;

  @IsString()
  @MinLength(6, {
    message: "Refresh token kamida 6 ta belgidan iborat bolishi kerak.",
  })
  refresh_token: string;

  @IsInt()
  @IsOptional()
  roleId: number;

  @IsBoolean()
  is_active: boolean;
}
