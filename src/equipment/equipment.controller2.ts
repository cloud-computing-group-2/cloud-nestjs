import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';

@Controller()
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post('createEquipment')
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Get('findAllEquipment')
  findAll() {
    return this.equipmentService.findAll();
  }

  @Get('findOneEquipment')
  findOne(@Param() id: string) {
    return this.equipmentService.findOne(id);
  }

  @Patch('updateEquipment')
  update(@Body() updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentService.update(updateEquipmentDto.id, updateEquipmentDto);
  }

  @Delete('removeEquipment')
  remove(@Param() id: string) {
    return this.equipmentService.remove(id);
  }
}
