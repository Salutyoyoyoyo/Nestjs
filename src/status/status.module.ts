import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import {
  Car,
  CompanySchema,
  Status,
  StatusSchema,
} from '../schema/companySchema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Status.name, schema: StatusSchema },
      { name: Car.name, schema: CompanySchema },
    ]),
  ],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
