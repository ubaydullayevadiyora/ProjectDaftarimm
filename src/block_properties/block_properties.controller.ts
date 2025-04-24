import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BlockPropertiessService } from "./block_properties.service";
import { CreateBlockPropertiesDto } from "./dto/create-block_properties.dto";
import { UpdateBlockPropertiesDto } from "./dto/update-block_properties.dto";

@Controller("blocks")
export class BlockPropertiesController {
  constructor(private readonly blocksService: BlockPropertiessService) {}

  @Post()
  create(@Body() createBlockPropertiesDto: CreateBlockPropertiesDto) {
    return this.blocksService.create(createBlockPropertiesDto);
  }

  @Get()
  findAll() {
    return this.blocksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.blocksService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBlockPropertiesDto: UpdateBlockPropertiesDto
  ) {
    return this.blocksService.update(+id, updateBlockPropertiesDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.blocksService.remove(+id);
  }
}
