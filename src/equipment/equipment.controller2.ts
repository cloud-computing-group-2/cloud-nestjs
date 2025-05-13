import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Equipment API')
@Controller("equipment")
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @ApiOperation({ summary: 'Create new equipment' })
  @ApiBody({ type: CreateEquipmentDto })
  @Post('createEquipment')
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }


  @ApiOperation({ summary: 'Search all equipments' })
  @Get('findAllEquipment')
  findAll() {
    return this.equipmentService.findAll();
  }

  @ApiOperation({ summary: "Find an equipment by id"})
  @ApiQuery({ name: 'id', required: true })
  @Get('findOneEquipment')
  findOne(@Param() id: string) {
    return this.equipmentService.findOne(id);
  }

  @ApiOperation({ summary: 'Update equipment' })
  @ApiBody({ type: UpdateEquipmentDto })
  @Patch('updateEquipment')
  update(@Body() updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentService.update(updateEquipmentDto.id, updateEquipmentDto);
  }

  @ApiOperation({ summary: 'Remove equipment' })
  @ApiQuery({ name: 'id', required: true })
  @Delete('removeEquipment')
  remove(@Param() id: string) {
    return this.equipmentService.remove(id);
  }

  @Delete("removeAllEquipment")
  removeAll() {
    return this.equipmentService.removeAll();
  }

  @ApiOperation({ summary: 'Seed equipment data' })
  @ApiQuery({ name: 'count', required: true, type: Number })
  @Post("/faker")
  faker(@Query('count') count: number) {
    return this.equipmentService.seed(count);
  }
}
