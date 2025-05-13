import { Injectable } from '@nestjs/common';
import { CreateClaimDto } from './dto/create-claim.dto';
import { UpdateClaimDto } from './dto/update-claim.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Claim } from './entities/claim.entity';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';

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

  async remove(id: number) {
    return this.claimModel.findByIdAndDelete(id).exec();
  }

  async seed(count : number = 10) {
    const fakeClaims: Partial<Claim>[] = [];

    const platforms: ('web' | 'app')[] = ['web', 'app'];
    const reasons: ('lost' | 'robbed' | 'unprocessed' | 'other')[] = [
      'lost', 'robbed', 'unprocessed', 'other',
    ];

    console.log(count);
    for (let i = 0; i < count; i++) {
      fakeClaims.push({
        passenger_id: faker.number.int({ min: 1, max: 20000 }).toString(),
        //passenger_id: faker.string.uuid(),
        claim_date: faker.date.recent(),
        claim_platform: faker.helpers.arrayElement(platforms),
        reason: faker.helpers.arrayElement(reasons),
        equipment_id: `EQP-${faker.string.uuid()}`,
      });
    }

    await this.claimModel.insertMany(fakeClaims);
    return fakeClaims;
  }
}
