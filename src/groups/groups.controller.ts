import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { GroupsService } from "./groups.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-groups.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Group } from "./model/group.model";

@Controller("groups")
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @UseInterceptors(FileInterceptor("icon"))
  create(@Body() createGroupDto: CreateGroupDto, @UploadedFile() icon: any):Promise<Group>{
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.groupsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(+id, updateGroupDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.groupsService.remove(+id);
  }
}
