import { Type } from "class-transformer";
import { IsDate, IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateClaimDto {
    @IsString()
    @IsNotEmpty()
    passenger_id: string;
  
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    claim_date: Date;
  
    @IsIn(['web', 'app'])
    @IsNotEmpty()
    claim_platform: 'web' | 'app';
  
    @IsIn(['lost', 'robbed', 'unprocessed', 'other'])
    @IsNotEmpty()
    reason: 'lost' | 'robbed' | 'unprocessed' | 'other';
}
