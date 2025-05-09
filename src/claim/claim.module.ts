import { Module } from '@nestjs/common';
import { ClaimService } from './claim.service';
import { ClaimController2 } from './claim.controller2';
import { MongooseModule } from '@nestjs/mongoose';
import { Claim, ClaimSchema } from './entities/claim.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Claim.name, schema: ClaimSchema }]),
  ],
  controllers: [ClaimController2],
  providers: [ClaimService],
})
export class ClaimModule {}
