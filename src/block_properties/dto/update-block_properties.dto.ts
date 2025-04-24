import { PartialType } from "@nestjs/mapped-types";
import { CreateBlockPropertiesDto } from "./create-block_properties.dto";

export class UpdateBlockPropertiesDto extends PartialType(
  CreateBlockPropertiesDto
) {}
