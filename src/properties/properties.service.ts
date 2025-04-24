import { Injectable } from "@nestjs/common";
import { CreatePropertiesDto } from "./dto/create-properties.dto";
import { UpdatePropertiesDto } from "./dto/update-properties.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Properties } from "./model/properties.model";

@Injectable()
export class PropertiesService {
  constructor(@InjectModel(Properties) private propertyModel: typeof Properties) {}
  async create(createPropertyDto: CreatePropertiesDto) {
    return this.propertyModel.create(createPropertyDto);
  }

  findAll() {
    return this.propertyModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} property`;
  }

  update(id: number, updatePropertiesDto: UpdatePropertiesDto) {
    return `This action updates a #${id} property`;
  }

  remove(id: number) {
    return `This action removes a #${id} property`;
  }
}
