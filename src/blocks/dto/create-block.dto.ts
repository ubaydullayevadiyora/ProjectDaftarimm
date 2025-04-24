import { IsInt,Min } from "class-validator";

export class CreateBlockDto {
  @IsInt({ message: "TypeId butun son bolishi kerak." })
  typeId: number;

  @IsInt({ message: "Parent butun son bolishi kerak." })
  parent: number;

  @IsInt({ message: "Order_index butun son bolishi kerak." })
  @Min(1, { message: "Order_index 1 dan kichik bolmasligi kerak." })
  order_index: number;
}
