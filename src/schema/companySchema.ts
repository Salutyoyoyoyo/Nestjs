import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Status {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.ObjectId, ref: 'Car' }] })
  cars: Car[];
}
export const StatusSchema = SchemaFactory.createForClass(Status);

@Schema()
export class Car {
  @Prop()
  brand: string;

  @Prop()
  price: string;

  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Types.ObjectId, ref: 'Status' }] })
  status: Status;
}
export const CompanySchema = SchemaFactory.createForClass(Car);
