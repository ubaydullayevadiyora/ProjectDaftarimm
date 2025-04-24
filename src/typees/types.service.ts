import { Injectable } from "@nestjs/common";
import { CreateTypesDto } from "./dto/create-types.dto";
import { UpdateTypesDto } from "./dto/update-types.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Type } from "./model/types.model";

@Injectable()
export class TypesService {
  constructor(@InjectModel(Type) private blockModel: typeof Type) {}
  async create(createTypeDto: CreateTypesDto) {
    return this.blockModel.create(createTypeDto);
  }

  findAll() {
    return this.blockModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} block`;
  }

  update(id: number, updateTypeDto: UpdateTypesDto) {
    return `This action updates a #${id} block`;
  }

  remove(id: number) {
    return `This action removes a #${id} block`;
  }
}
