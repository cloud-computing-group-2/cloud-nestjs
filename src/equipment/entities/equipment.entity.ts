import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsIn, IsNotEmpty, IsString, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Document } from "mongoose";
import { randomUUID } from "crypto";

@Schema()
export class Equipment extends Document {
  @Prop({ required: true, unique: true, default: () => `EQP-${randomUUID()}` })
  @IsString()
  @IsNotEmpty()
  tag: string;

  @Prop({ required: true, default: () => new Date() })
  @IsDate()
  registered_date: Date;

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  passenger: string; // Should be a Mongo ID or string UUID

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  flight: string; // Should be a Mongo ID or string UUID

  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  weight: string;

  @Prop({ type: Object, required: true })
  @ValidateNested()
  @Type(() => Description)
  description: Description;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);

export class Description {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  colour: string;
}
