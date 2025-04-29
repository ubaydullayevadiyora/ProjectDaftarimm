import { Injectable } from "@nestjs/common";
import { CreateDevicesDto } from "./dto/create-devices.dto";
import { UpdateDevicesDto } from "./dto/update-devices.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Devices } from "./model/devices.model";

@Injectable()
export class DevicesService {
  constructor(@InjectModel(Devices) private devicesModel: typeof Devices) {}
  async create(createDevicesDto: CreateDevicesDto) {
    return this.devicesModel.create(createDevicesDto);
  }

  findAll() {
    return this.devicesModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} devices`;
  }

  update(id: number, updateDevicesDto: UpdateDevicesDto) {
    return `This action updates a #${id} devices`;
  }

  remove(id: number) {
    return `This action removes a #${id} devices`;
  }
}
