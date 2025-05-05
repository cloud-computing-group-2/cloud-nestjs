import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { randomUUID } from "crypto";
import { HydratedDocument } from "mongoose";

export type FlightDocument = HydratedDocument<Flight>;

@Schema()
export class Flight {
    
    @Prop({ unique: true, default: () => randomUUID() })
    id: string;

    @Prop()
    origin: string;

    @Prop()
    destination: string;

    @Prop()
    departure_date: Date;

    @Prop()
    arrival_date: Date;
}

export const FlightSchema = SchemaFactory.createForClass(Flight);