import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString, ValidateNested } from "class-validator";

class DescriptionDto {
    @IsString()
    @IsNotEmpty()
    type: string;
  
    @IsString()
    @IsNotEmpty()
    colour: string;
}

export class CreateEquipmentDto {
    @IsString()
    @IsNotEmpty()
    tag: string;
  
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    registered_date: Date;
  
    @IsString()
    @IsNotEmpty()
    passenger_id: string;
  
    @IsString()
    @IsNotEmpty()
    flight_id: string;
  
    @IsString()
    @IsNotEmpty()
    weight: string;
  
    @ValidateNested()
    @Type(() => DescriptionDto)
    description: DescriptionDto;
}
