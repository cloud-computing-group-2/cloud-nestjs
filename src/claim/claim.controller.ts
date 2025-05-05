import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ClaimService } from './claim.service';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';

@Controller()
export class ClaimController {
  constructor(private readonly claimService: ClaimService) {}

  @MessagePattern('createClaim')
  create(@Payload() createClaimDto: CreateClaimDto) {
    return this.claimService.create(createClaimDto);
  }

  @MessagePattern('findAllClaim')
  findAll() {
    return this.claimService.findAll();
  }

  @MessagePattern('findOneClaim')
  findOne(@Payload() id: number) {
    return this.claimService.findOne(id);
  }

  @MessagePattern('updateClaim')
  update(@Payload() updateClaimDto: UpdateClaimDto) {
    return this.claimService.update(updateClaimDto.id, updateClaimDto);
  }

  @MessagePattern('removeClaim')
  remove(@Payload() id: number) {
    return this.claimService.remove(id);
  }
}
