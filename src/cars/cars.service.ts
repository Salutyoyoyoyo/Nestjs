import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Car } from '../schema/car.schema';
import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const createdCar = await this.carModel.create(createCarDto);
    return createdCar;
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async findById(carId: string): Promise<Car> {
    const carObjectId = new Types.ObjectId(carId);
    return await this.carModel.findById(carObjectId).exec();
  }

  async update(carId: string, updateCarDto: UpdateCarDto): Promise<Car> {
    try {
      const objectId = new Types.ObjectId(carId);
      const updatedCar = await this.carModel
        .findByIdAndUpdate(objectId, updateCarDto, { new: true })
        .exec();

      if (!updatedCar) {
        throw new NotFoundException('Car not found');
      }
      return updatedCar;
    } catch (error) {
      throw new Error('Error updating car');
    }
  }
  async remove(carId: string): Promise<Car> {
    try {
      const objectId = new Types.ObjectId(carId);
      const deletedCar = await this.carModel.findOneAndDelete(objectId).exec();

      if (!deletedCar) {
        throw new Error('Car not found for deletion');
      }

      return deletedCar;
    } catch (error) {
      throw new Error('Error deleting car');
    }
  }
}
