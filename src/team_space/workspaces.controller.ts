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
import { WorkspacesService } from "./workspaces.service";
import { CreateWorkspaceDto } from "./dto/create-workspace.dto";
import { UpdateWorkspaceDto } from "./dto/update-workspace.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Workspace } from "./model/workspace.model";

@Controller("workspace")
export class WorkspacesController {
  constructor(private readonly workspaceService: WorkspacesService) {}

  @Post()
  @UseInterceptors(FileInterceptor("icon"))
  create(
    @Body() createWorkspaceDto: CreateWorkspaceDto,
    @UploadedFile() icon: any
  ): Promise<Workspace> {
    return this.workspaceService.create(createWorkspaceDto);
  }

  @Get()
  findAll() {
    return this.workspaceService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.workspaceService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateWorkspaceDto: UpdateWorkspaceDto) {
    return this.workspaceService.update(+id, updateWorkspaceDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.workspaceService.remove(+id);
  }
}
