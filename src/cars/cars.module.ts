import { Module } from '@nestjs/common';
import {
  Car,
  CompanySchema,
  Status,
  StatusSchema,
} from '../schema/companySchema';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Car.name, schema: CompanySchema },
      { name: Status.name, schema: StatusSchema },
    ]),
  ],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
