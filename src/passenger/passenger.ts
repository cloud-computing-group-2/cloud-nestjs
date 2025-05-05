import { Prop, Schema } from "@nestjs/mongoose";
import { IsDate, IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsUUID } from "class-validator";
import { randomUUID } from "crypto";

@Schema()
export class Passenger {
    @IsUUID()
    @Prop({ required: true, unique: true, default: () => randomUUID()})
    id: string;

    @IsString()
    @IsNotEmpty()
    @Prop({ required: true })
    name: string;

    @IsDate()
    @Prop({ required: true })
    birth_date: Date;

    @IsEmail()
    @Prop({ unique: true })
    email: string;

    @IsPhoneNumber()
    @Prop({ required: true })
    phoneNumber: number;
}
