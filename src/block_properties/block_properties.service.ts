import { Injectable } from "@nestjs/common";
import { CreateBlockPropertiesDto } from "./dto/create-block_properties.dto";
import { UpdateBlockPropertiesDto } from "./dto/update-block_properties.dto";
import { InjectModel } from "@nestjs/sequelize";
import { BlockProperties } from "./model/block_properties.model";

@Injectable()
export class BlockPropertiessService {
  constructor(@InjectModel(BlockProperties) private blockModel: typeof BlockProperties) {}
  async create(createBlockPropertiesDto: CreateBlockPropertiesDto) {
    return this.blockModel.create(createBlockPropertiesDto);
  }

  findAll() {
    return this.blockModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} block`;
  }

  update(id: number, updateBlockPropertiesDto: UpdateBlockPropertiesDto) {
    return `This action updates a #${id} block`;
  }

  remove(id: number) {
    return `This action removes a #${id} block`;
  }
}
