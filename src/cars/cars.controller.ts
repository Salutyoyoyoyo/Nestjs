import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from '../dto/create-car.dto';
import { UpdateCarDto } from '../dto/update-car.dto';
import { Car } from '../schema/car.schema';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Post()
  async create(@Body() createCarDto: CreateCarDto) {
    await this.carService.create(createCarDto);
  }
  @Get()
  async findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }
  @Get(':carId')
  async findById(@Param('carId') carId: string): Promise<Car> {
    return this.carService.findById(carId);
  }
  @Patch(':carId')
  async update(
    @Param('carId') carId: string,
    @Body() updateCarDto: UpdateCarDto,
  ): Promise<Car> {
    return this.carService.update(carId, updateCarDto);
  }

  @Delete(':carId')
  async remove(@Param('carId') carId: string): Promise<Car> {
    return this.carService.remove(carId);
  }
}
