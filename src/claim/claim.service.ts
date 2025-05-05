import { Injectable } from '@nestjs/common';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Claim } from './entities/claim.entity';
import { Model } from 'mongoose';

@Injectable()
export class ClaimService {

  constructor(
    @InjectModel(Claim.name) private claimModel: Model<Claim>
  ) {}

  async create(createClaimDto: CreateClaimDto) {
    var created = new this.claimModel(createClaimDto);
    return created.save();
  }

  async findAll() {
    return this.claimModel.find().exec();
  }

  async findOne(id: number) {
    return this.claimModel.findById(id).exec();
  }

  async update(id: number, updateClaimDto: UpdateClaimDto) {
    return this.claimModel.findByIdAndUpdate(id, updateClaimDto, {
      new: true
    }).exec();
  }

  async remove(id: string) {
    return this.claimModel.findByIdAndDelete(id).exec();
  }
}
