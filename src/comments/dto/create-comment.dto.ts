import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsString, MinLength } from "class-validator";

export class CreateCommentDto {
  @ApiProperty({
    example: "Bu mening izohim",
    description: "Komment matni",
  })
  @IsString({ message: "Content matn bo'lishi kerak." })
  @MinLength(1, { message: "Content bosh bolmasligi kerak." })
  content: string;

  @ApiProperty({
    example: 1,
    description: "Foydalanuvchi IDsi",
  })
  @IsInt({ message: "User ID butun son bo'lishi kerak." })
  user_id: number;

  @ApiProperty({
    example: 10,
    description: "Block IDsi",
  })
  @IsInt({ message: "Block ID butun son bo'lishi kerak." })
  block_id: number;

  @ApiProperty({
    example: false,
    description: "Tahrirlanganmi yo'qmi",
  })
  @IsBoolean({ message: "is_edited qiymati true yoki false bo'lishi kerak." })
  is_edited: boolean;
}
