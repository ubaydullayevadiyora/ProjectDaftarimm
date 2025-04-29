import { PartialType } from '@nestjs/mapped-types';
import { CreateDevicesDto } from './create-devices.dto';

export class UpdateDevicesDto extends PartialType(CreateDevicesDto) {}
