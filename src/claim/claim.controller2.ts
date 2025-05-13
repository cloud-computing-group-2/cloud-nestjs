import {
  Body, Controller, Delete, Get, Param, Patch, Post, Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { ClaimService } from './claim.service';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';

@ApiTags("Claim API")
@Controller("claim")
export class ClaimController2 {
  constructor(private readonly claimService: ClaimService) {}

  @Post('createClaim')
  @ApiOperation({ summary: 'Create a new claim' })
  @ApiBody({ type: CreateClaimDto })
  create(@Body() createClaimDto: CreateClaimDto) {
    return this.claimService.create(createClaimDto);
  }

  @Get('findAllClaim')
  @ApiOperation({ summary: 'Get all claims' })
  findAll() {
    return this.claimService.findAll();
  }

  @Get('findOneClaim')
  @ApiOperation({ summary: 'Get a single claim by ID' })
  @ApiQuery({ name: 'id', type: Number })
  findOne(@Query('id') id: number) {
    return this.claimService.findOne(id);
  }

  @Patch('updateClaim')
  @ApiOperation({ summary: 'Update a claim' })
  @ApiBody({ type: UpdateClaimDto })
  update(@Body() updateClaimDto: UpdateClaimDto) {
    return this.claimService.update(updateClaimDto.id, updateClaimDto);
  }

  @Delete('removeClaim')
  @ApiOperation({ summary: 'Delete a claim' })
  @ApiQuery({ name: 'id', type: Number })
  remove(@Query('id') id: number) {
    return this.claimService.remove(id);
  }

  @Delete('removeAllClaim')
  removeAll() {
    return this.claimService.removeAll();
  }

  @Post('/faker')
  @ApiOperation({ summary: 'Seed fake claim data' })
  @ApiQuery({ name: 'count', type: Number })
  faker(@Query('count') count: number) {
    return this.claimService.seed(Number(count));
  }
}
