import { Injectable } from '@nestjs/common';
import { CreatePassageDto } from './dto/create-passage.dto';
import { UpdatePassageDto } from './dto/update-passage.dto';

@Injectable()
export class PassagesService {
  create(createPassageDto: CreatePassageDto) {
    return 'This action adds a new passage';
  }

  findAll() {
    return `This action returns all passages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passage`;
  }

  update(id: number, updatePassageDto: UpdatePassageDto) {
    return `This action updates a #${id} passage`;
  }

  remove(id: number) {
    return `This action removes a #${id} passage`;
  }
}
