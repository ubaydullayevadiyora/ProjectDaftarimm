import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TypesService } from "./types.service";
import { CreateTypesDto } from "./dto/create-types.dto";
import { UpdateTypesDto } from "./dto/update-types.dto";

@Controller("types")
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  create(@Body() createTypeDto: CreateTypesDto) {
    return this.typesService.create(createTypeDto);
  }

  @Get()
  findAll() {
    return this.typesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.typesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTypeDto: UpdateTypesDto) {
    return this.typesService.update(+id, updateTypeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.typesService.remove(+id);
  }
}
