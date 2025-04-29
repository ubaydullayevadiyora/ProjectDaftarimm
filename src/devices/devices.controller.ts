import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { CreateDevicesDto } from "./dto/create-devices.dto";
import { UpdateDevicesDto } from "./dto/update-devices.dto";

@Controller("devicess")
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  create(@Body() createDevicesDto: CreateDevicesDto) {
    return this.devicesService.create(createDevicesDto);
  }

  @Get()
  findAll() {
    return this.devicesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.devicesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDevicesDto: UpdateDevicesDto) {
    return this.devicesService.update(+id, updateDevicesDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.devicesService.remove(+id);
  }
}
