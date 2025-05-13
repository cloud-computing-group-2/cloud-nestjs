import { ApiProperty } from "@nestjs/swagger";
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
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    tag: string;

    @ApiProperty({type: String, format: "date-time"})
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    registered_date: Date;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    passenger_id: number;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    flight_id: number;
  
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    weight: string;
  
    @ApiProperty({ type: () => DescriptionDto })
    @ValidateNested()
    @Type(() => DescriptionDto)
    description: DescriptionDto;
}
