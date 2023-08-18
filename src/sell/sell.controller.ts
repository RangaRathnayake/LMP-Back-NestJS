/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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

  @Get('allByDate/:date')
  async getByDate(@Param('date') date) {
    return await this.sellService.getByDate(date);
  }

  @Get('ByDateRange/:sDate&:eDate')
    async getByDateRange(@Param('sDate') sDate, @Param('eDate') eDate) {
        return await this.sellService.getByDateRange(sDate, eDate);
    }

  @Get(':id')
  async getByID(@Param('id') id) {
    return await this.sellService.getById(id);
  }

  @Put(':id')
    async update(@Param('id') id: string, @Body() body: any) {
        const newCat: any = await this.sellService.update(id, body)
        return "Receipt Cancelled";
    }


}
