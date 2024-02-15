import { Module } from '@nestjs/common';
import { Car, CarSchema } from '../schema/car.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }])],
})
export class CarsModule {}
