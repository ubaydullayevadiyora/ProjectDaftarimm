import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsString,
  IsDate,
  IsOptional,
  Min,
  IsJSON,
} from "class-validator";

export class CreateDevicesDto {
  @ApiProperty({ example: 1, description: "type idsi" })
  @IsInt()
  typeId: number;

  @ApiProperty({ example: 1, description: "parent device id" })
  @IsInt()
  parent: number;

  @ApiProperty({ example: 1, description: "tartib raqam" })
  @IsInt()
  @Min(1)
  order_index: number;

  @ApiProperty({ example: 3, description: "user id" })
  @IsInt()
  user_id: number;

  @ApiProperty({ example: "Sensor A", description: "device nomi" })
  @IsString()
  name: string;

  @ApiProperty({ example: "Toshkent", description: "device joylashuvi" })
  @IsString()
  location: string;

  @ApiProperty({
    example: { voltage: 220 },
    description: "qoshimcha info (json)",
  })
  @IsOptional()
  information: any;

  @ApiProperty({ example: new Date(), description: "oxirgi faollik vaqti" })
  @IsOptional()
  last_active: Date;
}
