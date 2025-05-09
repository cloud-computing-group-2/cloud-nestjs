import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ClaimService } from './claim.service';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';

@Controller()
export class ClaimController2 {
  constructor(private readonly claimService: ClaimService) {}

  @Post('createClaim')
  create(@Body() createClaimDto: CreateClaimDto) {
    return this.claimService.create(createClaimDto);
  }

  @Get('findAllClaim')
  findAll() {
    return this.claimService.findAll();
  }

  @Get('findOneClaim')
  findOne(@Param() id: number) {
    return this.claimService.findOne(id);
  }

  @Patch('updateClaim')
  update(@Body() updateClaimDto: UpdateClaimDto) {
    return this.claimService.update(updateClaimDto.id, updateClaimDto);
  }

  @Delete('removeClaim')
  remove(@Param() id: number) {
    return this.claimService.remove(id);
  }
}
