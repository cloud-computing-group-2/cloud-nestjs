import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Equipment } from './entities/equipment.entity';
import { Model } from 'mongoose';
import { faker } from '@faker-js/faker';

@Injectable()
export class EquipmentService {

  constructor(
    @InjectModel(Equipment.name) private equipmentModel: Model<Equipment>
  )
  {}

  async create(createEquipmentDto: CreateEquipmentDto): Promise<Equipment> {
    const created = new this.equipmentModel(createEquipmentDto);
    return created.save();
  }

  async findAll(): Promise<Equipment[]> {
    return this.equipmentModel.find().exec();
  }

  async findOne(id: string) {
    return this.equipmentModel.findById(id).exec();
  }

  async update(id: string, updateEquipmentDto: UpdateEquipmentDto){
    return this.equipmentModel.findByIdAndUpdate(id, updateEquipmentDto, {
      new: true,
    }).exec();
  }

  async remove(id: string) {
    return this.equipmentModel.findByIdAndDelete(id).exec();
  }

  async seed(count = 10): Promise<Equipment[]> {
    const equipments: Equipment[] = [];
  
    for (let i = 0; i < count; i++) {
      const fakeEquipment: CreateEquipmentDto = {
        tag: `EQP-${faker.string.uuid()}`,
        registered_date: faker.date.recent(),
        passenger_id: faker.number.int({ min: 1, max: 20000 }), // número entre 1 y 20000
        //passenger_id: faker.string.uuid(),
        //flight_id: faker.string.uuid(),
        flight_id: faker.number.int({ min: 1, max: 20000 }), // número entre 1 y 20000
        weight: faker.number.float({ min: 5, max: 30 }).toFixed(1),
        description: {
          type: faker.commerce.productMaterial(),
          colour: faker.color.human(),
        },
      };
      const created = new this.equipmentModel(fakeEquipment);
      equipments.push(await created.save());
    }

    return equipments;
  }
}