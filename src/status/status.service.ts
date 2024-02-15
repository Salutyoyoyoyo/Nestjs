import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Status } from '../schema/companySchema';
import { Model, Types } from 'mongoose';
import { CreateStatusDto } from '../cars/dto/create-car.dto';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status.name) private readonly statusModel: Model<Status>,
  ) {}

  async createStatus(createStatusDto: CreateStatusDto): Promise<Status> {
    const createdStatus = await this.statusModel.create(createStatusDto);
    return createdStatus;
  }
  async findAll(): Promise<Status[]> {
    return this.statusModel.find().exec();
  }
  async getStatusById(statusId: string): Promise<Status> {
    const statusObjectId = new Types.ObjectId(statusId);
    return await this.statusModel.findById(statusObjectId).exec();
  }
}
