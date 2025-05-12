import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateClaimDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  passenger_id: string;

  @ApiProperty({ type: String, format: 'date-time' })
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  claim_date: Date;

  @ApiProperty({ enum: ['web', 'app'] })
  @IsIn(['web', 'app'])
  @IsNotEmpty()
  claim_platform: 'web' | 'app';

  @ApiProperty({ enum: ['lost', 'robbed', 'unprocessed', 'other'] })
  @IsIn(['lost', 'robbed', 'unprocessed', 'other'])
  @IsNotEmpty()
  reason: 'lost' | 'robbed' | 'unprocessed' | 'other';
}
