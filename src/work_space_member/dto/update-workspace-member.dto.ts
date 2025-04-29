import { PartialType } from "@nestjs/mapped-types";
import { CreateBlockDto } from "./create-workspace-member.dto";

export class UpdateBlockDto extends PartialType(CreateBlockDto) {}
