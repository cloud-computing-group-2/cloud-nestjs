import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassagesService } from './passages.service';
import { CreatePassageDto } from './dto/create-passage.dto';
import { UpdatePassageDto } from './dto/update-passage.dto';

@Controller()
export class PassagesController {
  constructor(private readonly passagesService: PassagesService) {}

  @MessagePattern('createPassage')
  create(@Payload() createPassageDto: CreatePassageDto) {
    return this.passagesService.create(createPassageDto);
  }

  @MessagePattern('findAllPassages')
  findAll() {
    return this.passagesService.findAll();
  }

  @MessagePattern('findOnePassage')
  findOne(@Payload() id: number) {
    return this.passagesService.findOne(id);
  }

  @MessagePattern('updatePassage')
  update(@Payload() updatePassageDto: UpdatePassageDto) {
    return this.passagesService.update(updatePassageDto.id, updatePassageDto);
  }

  @MessagePattern('removePassage')
  remove(@Payload() id: number) {
    return this.passagesService.remove(id);
  }
}
