import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { StatusService } from './status.service';
import { Status } from '../schema/companySchema';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Post()
  async createStatus(@Body() statusData: any) {
    const createdStatus = await this.statusService.createStatus(statusData);
    return createdStatus;
  }
  @Get()
  async findAll(): Promise<Status[]> {
    return this.statusService.findAll();
  }

  @Get(':id')
  async getStatusById(@Param('id') statusId: string) {
    const status = await this.statusService.getStatusById(statusId);
    return status;
  }
}
