import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsIn, IsNotEmpty, IsString, IsDate } from "class-validator";
import { Document } from "mongoose";

export type Platform = "web" | "app";
export type Reason = "lost" | "robbed" | "unprocessed" | "other";

@Schema()
export class Claim extends Document<number> {

  @IsString()
  @IsNotEmpty()
  @Prop({ required: true })
  passenger_id: number;

  @IsDate()
  @IsNotEmpty()
  @Prop({ required: true })
  claim_date: Date;

  @IsIn(["web", "app"])
  @IsNotEmpty()
  @Prop({ required: true })
  claim_platform: Platform;

  @IsIn(["lost", "robbed", "unprocessed", "other"])
  @IsNotEmpty()
  @Prop({ required: true })
  reason: Reason;

  equipment_id: string;
}

export const ClaimSchema = SchemaFactory.createForClass(Claim);

@Schema()
export class Tracing extends Document {

  @IsString()
  @Prop()
  attended_by: string;

  @IsNotEmpty()
  @IsString()
  @Prop({ required: true })
  contact_method: string;
}

export const TracingSchema = SchemaFactory.createForClass(Tracing);
