/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SellService } from './sell.service';

@Controller('sell')
export class SellController {
  constructor(private sellService: SellService) {}

  @Post('save')
  async save(@Body('sell') sell) {
    
    console.log(sell);
    return await this.sellService.save(sell);
  }

  @Get('all')
  async getAll() {
    return await this.sellService.getAll();
  }

  @Get(':id')
  async getByID(@Param('id') id) {
    return await this.sellService.getById(id);
  }
}
