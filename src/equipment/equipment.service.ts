import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Equipment } from './entities/equipment.entity';
import { Model } from 'mongoose';

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
}
